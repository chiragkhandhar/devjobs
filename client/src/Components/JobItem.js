import "../Styles/JobItem.css";

function JobItem() {
  return (
    <div className="ji-container">
      <img
        src="https://source.unsplash.com/random"
        alt="logo"
        className="ji-logo"
      />

      <div className="ji-line-1">
        <p className="ji-time">5h ago </p>
        <p className="ji-sep">•</p>
        <p className="ji-type">Full Time</p>
      </div>

      <p className="ji-title">Front End Engineer</p>

      <p className="ji-org">Egen Solutions</p>

      <p className="ji-location">Chicago, Maddison, San Diego</p>
    </div>
  );
}

export default JobItem;
