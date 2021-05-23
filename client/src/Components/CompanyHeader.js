import "../Styles/CompanyHeader.css";

// Icons
import { VscOrganization } from "react-icons/vsc";

function CompanyHeader(props) {
  const data = {
    company_logo: false,
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
        <p className="ch-title">Egen Solutions</p>
        <p className="ch-url">eagensolutions.co</p>
      </div>

      <button className="ch-site-btn">Company Site</button>
    </div>
  );
}

export default CompanyHeader;
