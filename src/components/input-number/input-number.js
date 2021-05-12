import "./input-number.scss";
import { InputNumberType } from "../../types/types";

function InputNumber({ name, onChange, label, value, disabled = false }) {
  return (
    <label className="form__label form__label-input">
      {label && <div className="form__label-text">{label}</div>}
      <input
        className="form__label-item"
        value={value}
        name={name}
        disabled={disabled}
        onChange={(evt) => onChange(evt.target)}
        type="number"
      />
    </label>
  );
}

InputNumber.propTypes = InputNumberType;
export default InputNumber;
