import { lazy } from "react";
import { Route, Routes } from "react-router";
import { any, home, recipe, recipes } from "./shared/constants/routes";
import { SharedLayout } from "./components/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RecipesPage = lazy(() => import("./pages/RecipesPage/RecipesPage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));

export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={recipes} element={<RecipesPage />} />
        <Route path={recipe} element={<RecipePage />} />
        <Route path={any} element={<HomePage />} />
      </Route>
    </Routes>
  );
};
