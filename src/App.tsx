import { BrowserRouter } from "react-router-dom";
import RouteList from "./router/RouteList";
import "./stylesheet/css/style.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
};

export default App;
