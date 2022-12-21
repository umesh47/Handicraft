import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import urls from "../routes/urls";
import { Dashboard } from "./Dashboard";

const RouteList = () => {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route path={urls.home} element={<Home />} />
        <Route path={urls.about} element={<About />} />
        <Route path={urls.contact} element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default RouteList;
