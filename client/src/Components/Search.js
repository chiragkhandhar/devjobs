import { useState } from "react";
import "../Styles/Search.css";

import axios from "axios";

// Icons
import { GoSearch } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { RiFilter2Fill } from "react-icons/ri";

function Search(props) {
  const [state, setstate] = useState({
    searchText: "",
    searchLocation: "remote",
    ftCB: false,
    page: 1,
  });

  const api_getData = () => {
    const URI = `positions.json?description=${state.searchText}&location=${state.searchLocation}&full_time=${state.ftCB}&page=${state.page}`;

    axios
      .get(URI)
      .then((res) => {
        props.setJobData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleCBChange = (event) => {
    setstate({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const handleSearch = () => {
    api_getData();
  };
  return (
    <div className="search-container">
      <div className="col-1-container">
        <GoSearch className="search-icon" />
        <input
          name="searchText"
          className="search-text"
          placeholder="Filter by title, companies, expertise..."
          onChange={handleChange}
        ></input>
      </div>

      <div className="col-2-container">
        <IoLocationSharp className="location-icon" />
        <input
          name="searchLocation"
          className="search-location"
          placeholder="Filter by location..."
          onChange={handleChange}
        ></input>
      </div>

      <div className="col-3-container">
        <div className="cb-wrapper">
          <input
            id="cb-ft"
            name="ftCB"
            type="checkbox"
            onChange={handleCBChange}
            className="cb-ft"
          ></input>
          <label htmlFor="cb-ft" className="cb-text">
            Full Time Only
          </label>
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="col-4-container">
        <button className="filter-btn">
          <RiFilter2Fill />
        </button>
        <button className="search-btn" onClick={handleSearch}>
          <GoSearch />
        </button>
      </div>
    </div>
  );
}

export default Search;
