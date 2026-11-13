import { useCallback, useEffect, useRef, useState } from "react";

export type GeoPosition = {
  lat: number;
  lng: number;
  accuracy: number;
};

export type GeoStatus =
  | "idle"
  | "prompting"
  | "granted"
  | "denied"
  | "unavailable"
  | "timeout"
  | "error";

type UseGeolocationOptions = {
  /** Request location as soon as the hook mounts */
  requestOnMount?: boolean;
  enableHighAccuracy?: boolean;
  timeoutMs?: number;
  maximumAgeMs?: number;
};

export function useGeolocation(options: UseGeolocationOptions = {}) {
  const {
    requestOnMount = false,
    enableHighAccuracy = true,
    timeoutMs = 15000,
    maximumAgeMs = 0,
  } = options;

  const [position, setPosition] = useState<GeoPosition | null>(null);
  const [status, setStatus] = useState<GeoStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const watchId = useRef<number | null>(null);

  const clearWatch = useCallback(() => {
    if (watchId.current != null && "geolocation" in navigator) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
  }, []);

  const requestLocation = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unavailable");
      setErrorMessage("GPS is not supported on this device or browser.");
      return;
    }

    setStatus("prompting");
    setErrorMessage(null);

    const onSuccess = (pos: GeolocationPosition) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy,
      });
      setStatus("granted");
      setErrorMessage(null);
    };

    const onError = (err: GeolocationPositionError) => {
      if (err.code === err.PERMISSION_DENIED) {
        setStatus("denied");
        setErrorMessage(
          "Location permission was denied. Enable it in browser settings, then try again.",
        );
      } else if (err.code === err.TIMEOUT) {
        setStatus("timeout");
        setErrorMessage("Location request timed out. Move outdoors or try again.");
      } else {
        setStatus("error");
        setErrorMessage(err.message || "Could not get your location.");
      }
    };

    const geoOpts: PositionOptions = {
      enableHighAccuracy,
      timeout: timeoutMs,
      maximumAge: maximumAgeMs,
    };

    // One-shot for permission + first fix, then watch for updates
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        onSuccess(pos);
        clearWatch();
        watchId.current = navigator.geolocation.watchPosition(onSuccess, onError, geoOpts);
      },
      onError,
      geoOpts,
    );
  }, [clearWatch, enableHighAccuracy, maximumAgeMs, timeoutMs]);

  useEffect(() => {
    if (requestOnMount) requestLocation();
    return clearWatch;
  }, [requestOnMount, requestLocation, clearWatch]);

  return { position, status, errorMessage, requestLocation };
}
