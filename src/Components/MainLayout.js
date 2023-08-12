import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <>
    <header className="bg-white px-4 shadow-sm py-2 d-flex align-items-center justify-content-between">
        <Link to="/"><img src="/images/logo.png" className="logo" alt="" /></Link>
        <Link to="checkout"><span count={8} className="text-black cart-icon"><ion-icon className="cart-ion-icon" name="cart"></ion-icon></span></Link>
    </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
