import "./input-number.scss";

function InputNumber({ name, handlerChange, label, value , disabled = false}) {
  return (
    <label className="form-label form-label__input">
      {label && <p className="form-label__text">{label}</p>}
      <input
        className="form-label__item"
        value={value}
        name={name}
        disabled={disabled}
        onChange={(evt) => handlerChange(evt.target)}
        type="number"
      />
    </label>
  );
}

export default InputNumber;
