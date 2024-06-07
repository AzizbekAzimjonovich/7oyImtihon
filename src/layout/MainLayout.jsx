import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ProductMain, Navbar, Fotter, ProductCard, Gear } from "../components";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ProductCard />
      {location.pathname === "/" && <ProductMain />}
      <Gear />
      <Fotter />
    </div>
  );
};

export default MainLayout;
