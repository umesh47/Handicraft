import NavigationBar from "./NavigationBar";
import { GiWoodPile } from "react-icons/gi";
import SearchBar from "./SearchBar.tsx";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <GiWoodPile fontSize="23px" />
        <h2 className="ml-2">Hamro Handicraft</h2>
      </div>
      <div className="navbar">
        <NavigationBar />
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
