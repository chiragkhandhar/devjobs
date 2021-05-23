import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import axios from "axios";
import "../Styles/DetailsPage.css";

// Components
import Header from "../Components/Header";
import CompanyHeader from "../Components/CompanyHeader";
import CompanyDetails from "../Components/CompanyDetails";
import Footer from "../Components/Footer";

function DetailsPage(props) {
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState({
    desc: {},
  });

  const api_getDetails = (id) => {
    const URI = `/positions/${id}.json`;

    axios
      .get(URI)
      .then((res) => {
        setState({
          ...state,
          desc: res.data,
        });
        console.log(res.data);
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
      <Footer />
    </div>
  );
}

export default DetailsPage;
