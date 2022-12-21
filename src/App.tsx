import { BrowserRouter } from "react-router-dom";
import RouteList from "./router/RouteList";

const App = () => {
  return (
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  );
};

export default App;
