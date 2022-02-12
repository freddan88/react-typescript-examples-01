import React, { useEffect, useState } from "react";
import { handleChange, handleInvalid } from "./textInputHelpers";

interface IProps {
  id?: string;
  name: string;
  label: string;
  value?: string;
  error?: string;
}

const TextInput: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError(props.error ?? "");
  }, [props.error]);

  useEffect(() => {
    setValue(props.value ?? "");
  }, [props.value]);

  const inputId = props.id ? props.id : props.name;

  return (
    <div className="form__group">
      {props.label && <label htmlFor={inputId}>{props.label}</label>}
      <input
        required
        type="text"
        id={inputId}
        value={value}
        name={props.name}
        autoComplete="off"
        onFocus={() => setError("")}
        onChange={(e) => setValue(handleChange(e))}
        onInvalid={(e) => setError(handleInvalid(e))}
      />
      <small>{error}</small>
    </div>
  );
};

export default TextInput;
