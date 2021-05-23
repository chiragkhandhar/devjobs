import "../Styles/Error.css";

function Error() {
  return (
    <div className="error-container">
      <img src="/404.png" className="error-img"/>
      <p className="error-msg">Sorry, we didn't find any jobs with that query 😢</p>
    </div>
  );
}

export default Error;
