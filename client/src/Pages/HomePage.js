import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import "../Styles/HomePage.css";

// Components
import Header from "../Components/Header";
import Search from "../Components/Search";
import JobItem from "../Components/JobItem";
import Footer from "../Components/Footer";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState({
    jobData: [],
  });

  const setJobData = (data) => {
    setState({
      ...state,
      jobData: data,
    });
  };

  return (
    <div theme={theme} className="container">
      <Header />
      <Search setJobData={setJobData} />
      <div className="job-items">
        {state.jobData.map((jobItem) => (
          <JobItem key={jobItem.id} jobItem={jobItem} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
