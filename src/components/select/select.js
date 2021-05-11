import "./select.scss";

function Select({ options, handlerChange, name, defaultValue }) {
  return (
    <select
      className="select"
      name={name}
      defaultValue={defaultValue}
      onChange={(evt) => handlerChange(evt.target)}
    >
      {options.map((option, index) => (
        <option key={name + index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
