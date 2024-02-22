import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Background from "./components/Background.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="app-background">
      <Router>
        <Navbar />
        <Background>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Background>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
