import React, { useState } from "react";

/*
Documentation:
  [Props]
    -
*/

interface IProps {
  name: string;
  label: string;
}

const TextInput: React.FC<IProps> = (props) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="form__group">
      <label htmlFor={props.name}>{props.label}</label>
      <input id={props.name} name={props.name} value={value} onChange={handleChange} type="text" />
    </div>
  );
};

export default TextInput;
