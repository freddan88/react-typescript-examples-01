interface IProps {
  name: string;
  label?: string;
  required?: boolean;
}

const FormFieldLabel: React.FC<IProps> = (props) => {
  if (!props.label) return null;

  return (
    <label htmlFor={props.name}>
      {props.label}
      {props.required && <span>*</span>}
    </label>
  );
};

export default FormFieldLabel;
