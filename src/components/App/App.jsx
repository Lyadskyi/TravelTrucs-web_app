import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() => import("../../pages/CamperDetailsPage/CamperDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

const DetailsFeatures = lazy(() => import("../DetailsFeatures/DetailsFeatures"));
const DetailsReviews = lazy(() => import("../DetailsReviews/DetailsReviews"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route path="features" element={<DetailsFeatures />} />
          <Route path="reviews" element={<DetailsReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
