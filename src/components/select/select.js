import "./select.scss";
import { SelectType } from "../../types/types";

function Select({ options, onChange, name, defaultValue }) {
  return (
    <select
      className="select"
      name={name}
      defaultValue={defaultValue}
      onChange={(evt) => onChange(evt.target)}
    >
      {options.map((option, index) => (
        <option key={name + index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
Select.propTypes = SelectType;
export default Select;
