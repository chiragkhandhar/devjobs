import "../Styles/JobItem.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

// Icons
import { VscOrganization } from "react-icons/vsc";

function JobItem(props) {
  const data = props.jobItem;
  dayjs.extend(relativeTime);
  return (
    <div className="ji-container">
      {data.company_logo ? (
        <img src={data.company_logo} alt="logo" className="ji-logo" />
      ) : (
        <div className="ji-placeholder">
          <VscOrganization />
        </div>
      )}

      <div className="ji-line-1">
        <p className="ji-time">{dayjs(data.created_at).fromNow()} </p>
        <p className="ji-sep">•</p>
        <p className="ji-type">{data.type}</p>
      </div>

      <Link
        to={{
          pathname: `/description/${data.id}`,
        }}
        className = "ji-link"
      >
        <p className="ji-title">{data.title}</p>
      </Link>

      <p className="ji-org">{data.company}</p>

      <p className="ji-location">{data.location}</p>
    </div>
  );
}

export default JobItem;
