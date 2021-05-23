import { useContext } from "react";
import { ThemeContext } from "../App";
import "../Styles/HomePage.css";

// Components
import Header from "../Components/Header";
import Search from "../Components/Search";
import JobItem from "../Components/JobItem";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div theme={theme} className="container">
      <Header />
      <Search />
      <div className="job-items">
        <div className="job-item-row">
          <JobItem />
          <JobItem />
          <JobItem />
        </div>

        <div className="job-item-row">
          <JobItem />
          <JobItem />
          <JobItem />
        </div>

        <div className="job-item-row">
          <JobItem />
          <JobItem />
          <JobItem />
        </div>

        <div className="job-item-row">
          <JobItem />
          <JobItem />
          <JobItem />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
