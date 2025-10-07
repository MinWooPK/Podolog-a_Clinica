import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import AboutMe from "@pages/AboutMe";
import ContactMe from "@pages/ContactMe";
import MainLayout from "@layouts/MainLayout";
import { ThemeProvider } from "styled-components";
// import { defaultTheme } from "../config/defaultTheme";
import defaultTheme from "@config/defaultTheme";

// Más páginas importadas aquí
// import About from "@pages/About";
// import Contact from "@pages/Contact";

const AppRoutes: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>{" "}
    </ThemeProvider>
  );
};

export default AppRoutes;
