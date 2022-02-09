import { useState } from "react";
import { getAutoCompleteValue, getFormFieldStyles, renderLabel } from "../formFieldHelpers";
import { getValidationMessage } from "../formFieldValidation";

interface IProps {
  autocomplete?: boolean;
  required?: boolean;
  label?: string;
  name: string;
  minlength?: number;
  maxlength?: number;
}

const FormTextField: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fieldStyles = getFormFieldStyles();
  const { name, label, required } = props;

  return (
    <div className="form__group">
      {label && renderLabel(name, label, required, fieldStyles)}
      <input
        type="text"
        value={value}
        id={props.name}
        name={props.name}
        required={props.required}
        minLength={props.minlength}
        maxLength={props.maxlength}
        onFocus={() => setError("")}
        onChange={(e) => setValue(e.target.value)}
        onInvalid={(e) => setError(getValidationMessage(e))}
        autoComplete={getAutoCompleteValue(props.autocomplete)}
      />
      <small>{error}</small>
    </div>
  );
};

export default FormTextField;
