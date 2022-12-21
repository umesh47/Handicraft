import { NavLink } from "react-router-dom";
import urls from "../../routes/urls";

const NavigationBar = () => {
  return (
    <div>
      <NavLink to={urls.home}>Home</NavLink>
      <NavLink to={urls.about}>About</NavLink>
      <NavLink to={urls.contact}>Contact</NavLink>
    </div>
  );
};

export default NavigationBar;
