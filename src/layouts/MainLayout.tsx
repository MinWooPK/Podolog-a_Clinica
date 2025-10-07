import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@organisms/Header";
import Footer from "@organisms/Footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
