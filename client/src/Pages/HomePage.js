import { useContext } from "react";
import { ThemeContext } from "../App";
import "../Styles/HomePage.css";

// Components
import Header from "../Components/Header";
import Search from "../Components/Search";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div theme={theme} className="container">
      <Header />
      <Search />
    </div>
  );
}

export default HomePage;
