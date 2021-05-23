import "../Styles/CompanyHeader.css";

// Icons
import { VscOrganization } from "react-icons/vsc";

function CompanyHeader(props) {
  const data = props.data;
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

      <button className="ch-site-btn">Company Site</button>
    </div>
  );
}

export default CompanyHeader;
