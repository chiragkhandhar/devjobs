import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import "../Styles/HomePage.css";

// Components
import Header from "../Components/Header";
import Search from "../Components/Search";
import JobItem from "../Components/JobItem";
import Error from "../Components/Error";
import Footer from "../Components/Footer";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  const [state, setState] = useState({
    jobData: [],
  });
  const [isError, setError] = useState(false);
  const setJobData = (data) => {
    setState({
      ...state,
      jobData: data,
    });
  };

  const handlePagination = () => {
    // Call API here
  };

  return (
    <div theme={theme} className="container">
      <Header />
      <Search setJobData={setJobData} setError={setError} />
      {!isError ? (
        <div className="job-items">
          {state.jobData.map((jobItem) => (
            <JobItem key={jobItem.id} jobItem={jobItem} />
          ))}
        </div>
      ) : (
        <Error />
      )}
      {state.jobData.length === 50 && (
        <button className="more-btn" onClick={handlePagination}>
          Load More
        </button>
      )}
      <Footer />
    </div>
  );
}

export default HomePage;
