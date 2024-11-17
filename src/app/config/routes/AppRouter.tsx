import { Route, Routes } from "react-router-dom";

import HomePage from "@pages/home";

import { AppRoutes } from "./AppRoutes";

export default function AppRouter() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path={AppRoutes.home} element={<HomePage />} />
      </Routes>
    </div>
  );
}
