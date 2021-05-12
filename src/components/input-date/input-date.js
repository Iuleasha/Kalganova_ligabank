import "./input-date.scss";
import { InputDataType } from "../../types/types";
function InputDate({ name, min, max, value, onChange }) {
  return (
    <label className="input__date-label">
      <input
        className="input__date-form"
        type="date"
        name={name}
        min={min}
        max={max}
        defaultValue={value}
        onChange={(evt) => onChange(evt.target)}
        required
      />
    </label>
  );
}
InputDate.propTypes = InputDataType;
export default InputDate;
