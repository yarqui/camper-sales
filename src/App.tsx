import { Navigate, Route, Routes } from "react-router-dom";
import { FC, lazy } from "react";
import Notiflix from "notiflix";

import PAGE_NAMES from "./router/paths";

const HeaderLayout = lazy(() => import("./layouts/HeaderLayout/HeaderLayout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

Notiflix.Notify.init({
  position: "center-top",
  width: "400px",
  timeout: 2000,
  messageMaxLength: 600,
});

const App: FC = () => {
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
