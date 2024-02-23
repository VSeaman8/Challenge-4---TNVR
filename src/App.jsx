import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Background from "./components/Background.jsx";
import FavouriteLocations from "./pages/FavouriteLocations.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Weather from "./pages/Weather.jsx";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Background>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Weather" element={<Weather />} />
            <Route
              path="/FavouriteLocations"
              element={<FavouriteLocations />}
            />
          </Routes>
          <Footer />
        </Background>
      </Router>
    </div>
  );
};

export default App;
