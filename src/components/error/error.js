import "./error.scss";

function Error({ error }) {
  return (
    <div className="error">
      <p className="error__text">{error}</p>
    </div>
  );
}

export default Error;
