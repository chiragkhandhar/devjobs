import { useContext } from "react";
import { ThemeContext } from "../App";
import "../Styles/HomePage.css";

// Components
import Header from "../Components/Header";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div theme={theme} className="container">
      <Header />
    </div>
  );
}

export default HomePage;
