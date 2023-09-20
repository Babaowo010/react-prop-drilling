import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Outlet />
      <scrollRestoration />
    </div>
  );
}

export default App;
