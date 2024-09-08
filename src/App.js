import { HashRouter } from "react-router-dom";
import "./App.css";
import RouteDefinitions from "./RouteDefinitions";

function App() {
  return (
    <HashRouter>
      <RouteDefinitions/>
    </HashRouter>
  );
}

export default App;
