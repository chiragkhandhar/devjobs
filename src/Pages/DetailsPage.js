import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import axios from "axios";
import "../Styles/DetailsPage.css";

// Components
import Header from "../Components/Header";
import CompanyHeader from "../Components/CompanyHeader";
import CompanyDetails from "../Components/CompanyDetails";
import HowToApply from "../Components/HowToApply";
import Apply from "../Components/Apply";
import Footer from "../Components/Footer";

function DetailsPage(props) {
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState({
    desc: {},
  });

  const api_getDetails = (id) => {
    const url = `https://jobs.github.com/positions/${id}.json`;
    const URI = `https://cors-anywhere.herokuapp.com/${url}`;
    axios
      .get(URI)
      .then((res) => {
        setState({
          ...state,
          desc: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api_getDetails(props.match.params.id);
  }, []);
  return (
    <div theme={theme} className="container">
      <Header />
      <CompanyHeader data={state.desc} />
      <CompanyDetails data={state.desc} />
      <HowToApply data={state.desc} />
      <Apply data={state.desc} />
      <Footer />
    </div>
  );
}

export default DetailsPage;
