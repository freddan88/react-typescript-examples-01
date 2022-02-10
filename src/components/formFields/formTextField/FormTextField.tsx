import { useState } from "react";
import { getAutoCompleteValue, getFormFieldStyles, renderLabel } from "../formFieldHelpers";
import { ITextFieldProps } from "../formFieldInterfaces";
import { getValidationMessage } from "../formFieldValidation";
import FormFieldLabel from "./FormFieldLabel";

const FormTextField: React.FC<ITextFieldProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fieldStyles = getFormFieldStyles();

  return (
    <div className="form__group">
      <FormFieldLabel name={props.name} label={props.label} required={props.required} />
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
