import "../Styles/CompanyHeader.css";
import { Link } from "react-router-dom";

// Icons
import { VscOrganization } from "react-icons/vsc";

function CompanyHeader(props) {
  const data = props.data;

  const handleClick = () => {
    window.open(data.company_url);
  };
  return (
    <div className="ch-container">
      {data.company_logo ? (
        <img src={data.company_logo} alt="logo" className="ch-logo" />
      ) : (
        <div className="ch-placeholder">
          <VscOrganization />
        </div>
      )}

      <div className="ch-details">
        <p className="ch-title">{data.company}</p>
        {data.company_url && <p className="ch-url">{data.company_url}</p>}
      </div>

      {data.company_url && (
        <button className="ch-site-btn" onClick={handleClick}>
          Company Site
        </button>
      )}
    </div>
  );
}

export default CompanyHeader;
