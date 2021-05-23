import "../Styles/CompanyDetails.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function CompanyDetails(props) {
  const data = props.data;
  dayjs.extend(relativeTime);

  const handleClick = () => {
    window.open(data.url);
  };

  return (
    <div className="cd-container">
      <div className="cd-row-1">
        <div>
          <div className="ji-line-1">
            <p className="ji-time">{dayjs(data.created_at).fromNow()} </p>
            <p className="ji-sep">•</p>
            <p className="ji-type">{data.type}</p>
          </div>

          <p className="cd-title">{data.title}</p>

          <p className="cd-location">{data.location}</p>
        </div>
        {data.url && (
          <button className="cd-apply-btn" onClick={handleClick}>
            Apply Now
          </button>
        )}
      </div>
      <div
        className="cd-desc"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>
    </div>
  );
}

export default CompanyDetails;
