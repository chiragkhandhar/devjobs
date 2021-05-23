import "../Styles/HowToApply.css";

function HowToApply(props) {
  const data = props.data;
  return (
    <div className="hta-container">
      <p className="hta-title">How to Apply</p>
      <div
      className="hta-details"
        dangerouslySetInnerHTML={{ __html: data.how_to_apply }}
      ></div>
    </div>
  );
}

export default HowToApply;
