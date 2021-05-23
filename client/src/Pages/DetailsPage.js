import { useContext } from "react";
import { ThemeContext } from "../App";
import "../Styles/DetailsPage.css";

// Components
import Header from "../Components/Header";
import CompanyHeader from "../Components/CompanyHeader";
import Footer from "../Components/Footer";

function DetailsPage(props) {
  const { theme } = useContext(ThemeContext);
  const id = props.match.params.id;
  return (
    <div theme={theme} className="container">
      <Header />
      <CompanyHeader/>
      <Footer />
    </div>
  );
}

export default DetailsPage;
