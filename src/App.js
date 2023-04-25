import "./assets/fonts/sfuidisplay.css";
import "./assets/css/plugins.min.css";
import "./assets/css/app.css";
import "./assets/css/custom.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
