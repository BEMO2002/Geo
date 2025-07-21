import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import WhoPage from "./WhoPage/MainWho";
import MainServices from "./ServicesPage/MainServices";
import MainSolution from "./Solutions/MainSolution";
import NewsDetails from "./NewsDetails";
import Partnership from "./Partnership";
import MainProject from "./projects/MainProject";
import ProjectsDetails from "./ProjectsDetails";
import MainContact from "./ContactPage/MainContact";
import ScrollToTop from "./ScrollToTop";
import SolutionDetails from "./SolutionDetails";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/news/:slug" element={<NewsDetails />} />
          <Route path="/partnership" element={<Partnership />} />
        </Route>
        <Route path="/who" element={<Layout />}>
          <Route index element={<WhoPage />} />
        </Route>
        <Route path="/services" element={<Layout />}>
          <Route index element={<MainServices />} />
        </Route>
        <Route path="/solutions" element={<Layout />}>
          <Route index element={<MainSolution />} />
          <Route path="/solutions/:slug" element={<SolutionDetails/>}/>
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<MainProject />} />
          <Route path="/projects/:slug" element={<ProjectsDetails />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<MainContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
