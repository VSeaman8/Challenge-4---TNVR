import SearchEngine from "./components/SearchEngine";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Tell Me About...</h1>
      <SearchEngine />
    </div>
  );
};

export default Home;
