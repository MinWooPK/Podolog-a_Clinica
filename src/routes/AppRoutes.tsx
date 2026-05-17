import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import AboutMe from "@pages/AboutMe";
import ContactMe from "@pages/ContactMe";
import MainLayout from "@layouts/MainLayout";
import { ThemeProvider } from "styled-components";
// import { defaultTheme } from "../config/defaultTheme";
import defaultTheme from "@config/defaultTheme";
import NotFound from "@pages/NotFound";
import General from "@pages/Podologia/General";
import Deportiva from "@pages/Podologia/Deportiva";
import Quipodologia from "@pages/Podologia/Quipodologia";
import Plantilla from "@pages/Podologia/Plantilla";
import Ortonxia from "@pages/Podologia/Ortonxia";
import Nails from "@pages/Podologia/Nails";
import Biometria from "@pages/Podologia/Biometria";
import Infantil from "@pages/Podologia/Infantil";
// Más páginas importadas aquí
// import About from "@pages/About";
// import Contact from "@pages/Contact";

const AppRoutes: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          {/* Layout principal */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/DraRebeca" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/podologia" element={<General />} />
            <Route path="/podologia/deportiva" element={<Deportiva />} />
            <Route
              path="/podologia/quiropodologia"
              element={<Quipodologia />}
            />
            <Route path="/podologia/plantillas_3D" element={<Plantilla />} />
            <Route path="/podologia/ortonixia" element={<Ortonxia />} />
            <Route path="/podologia/nails" element={<Nails />} />
            <Route
              path="/podologia/estudio_biomecanico"
              element={<Biometria />}
            />
            <Route path="/podologia/infantil" element={<Infantil />} />

            {/*  NOT FOUND (fallback) */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
