import React, { useEffect, useState } from "react";

/*
Documentation:
  [Props]
    -
*/

interface IProps {
  id?: string;
  name: string;
  label?: string;
  value?: string;
}

const TextInput: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(props.value ?? "");
  }, [props.value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const inputId = props.id ? props.id : props.name;

  return (
    <div className="form__group">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input id={inputId} name={props.name} value={value} onChange={handleChange} type="text" />
    </div>
  );
};

export default TextInput;
