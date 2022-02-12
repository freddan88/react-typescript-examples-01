interface IProps {
  id: string;
  label: string;
}

const TextInputLabel: React.FC<IProps> = (props) => {
  return <label htmlFor={props.id}>{props.label}</label>;
};

export default TextInputLabel;
