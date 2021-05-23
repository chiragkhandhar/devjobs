import { useContext } from "react";
import { ThemeContext } from "../App";
import "../Styles/DetailsPage.css";

// Components
import Header from "../Components/Header";
import CompanyHeader from "../Components/CompanyHeader";
import CompanyDetails from "../Components/CompanyDetails";
import Footer from "../Components/Footer";

function DetailsPage(props) {
  const { theme } = useContext(ThemeContext);
  const id = props.match.params.id;
  return (
    <div theme={theme} className="container">
      <Header />
      <CompanyHeader />
      <CompanyDetails />
      <Footer />
    </div>
  );
}

export default DetailsPage;
