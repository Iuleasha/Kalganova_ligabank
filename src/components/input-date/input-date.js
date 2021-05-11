import "./input-date.scss";

function InputDate({ name, min, max, value, handleSelectDate }) {
  return (
    <label>
      <input
        className="input__date-form"
        type="date"
        name={name}
        min={min}
        max={max}
        defaultValue={value}
        onChange={(evt) => handleSelectDate(evt.target)}
        required
      />
    </label>
  );
}

export default InputDate;
