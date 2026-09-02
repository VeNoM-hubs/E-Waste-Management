import { Navigate } from "react-router-dom";
import { getCategory } from "../data/categories";
import { CategoryPage } from "./CategoryPage";

export function BatteriesPage() {
  return <CategoryPage category={getCategory("batteries")} />;
}

export function ElectronicsPage() {
  return <CategoryPage category={getCategory("electronics")} />;
}

export function CablesPage() {
  return <CategoryPage category={getCategory("cables")} />;
}

export function OtherPage() {
  return <CategoryPage category={getCategory("other")} />;
}

export function NotFoundPage() {
  return <Navigate to="/" replace />;
}
