import { NavLink } from "react-router-dom";
import urls from "../../routes/urls";
import { RiHome2Line } from "react-icons/ri";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={urls.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={urls.about}>About</NavLink>
        </li>
        <li>
          <NavLink to={urls.contact}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
