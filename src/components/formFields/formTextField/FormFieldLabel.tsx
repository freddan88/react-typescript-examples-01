import { useState } from "react";

interface IProps {
  name: string;
  label?: string;
  required?: boolean;
}

const FormFieldLabel: React.FC<IProps> = (props) => {
  const [name, setName] = useState("");
  if (!props.label) return null;

  const isActive = true;

  return (
    <label htmlFor={props.name}>
      {props.label}
      {props.required && <span>*</span>}
    </label>
  );
};

export default FormFieldLabel;
