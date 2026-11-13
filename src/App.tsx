import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CentresPage } from "./pages/CentresPage";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import {
  BatteriesPage,
  ElectronicsPage,
  CablesPage,
  OtherPage,
  NotFoundPage,
} from "./pages/categoryRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/centres" element={<CentresPage />} />
        <Route path="/batteries" element={<BatteriesPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/cables" element={<CablesPage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
