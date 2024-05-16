import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PAGE_NAMES from "./router/paths";

const HeaderLayout = lazy(() => import("./layouts/HeaderLayout/HeaderLayout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<HeaderLayout />}>
          <Route index element={<HomePage />} />

          <Route path={PAGE_NAMES.catalog} element={<Catalog />} />

          <Route path={PAGE_NAMES.favorites} element={<Favorites />} />

          <Route
            path="*"
            element={<Navigate to={PAGE_NAMES.homepage} replace />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
