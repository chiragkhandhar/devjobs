import "../Styles/Apply.css";

function Apply(props) {
  const data = props.data;
  const handleClick = () => {
    window.open(data.url);
  };
  return (
    <div className="apply-conatiner">
      {data.url && (
        <button className="apply-btn" onClick={handleClick}>
          Apply Now
        </button>
      )}
    </div>
  );
}

export default Apply;
