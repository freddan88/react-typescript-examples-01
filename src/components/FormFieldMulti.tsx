import { useState, ReactNode, cloneElement, useRef, useEffect } from "react";
import { last, isEmpty } from "lodash";
interface IProps {
  children: JSX.Element & ReactNode;
}

const outputStyles = {
  display: "flex",
  alignItems: "center",
  justfyContent: "space-between",
};

interface IState {
  id: number;
  value: string;
}

const FormFieldMulti: React.FC<IProps> = (props) => {
  const [inputs, setInputs] = useState<IState[]>([{ id: 1, value: "" }]);

  // console.dir(props.children.type.name);

  const appendInputs = () => {
    const prev = last(inputs);
    if (!prev) return;
    const newInput = { id: prev.id + 1, value: "" };
    setInputs([...inputs, newInput]);
  };

  const deleteInputs = (id: number) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const renderAddButton = (disabled: boolean = false) => (
    <button disabled={disabled} onClick={appendInputs}>
      +
    </button>
  );

  const renderActionButtons = (id: number) => (
    <div>
      <button onClick={() => deleteInputs(id)}>-</button>
      <button onClick={appendInputs}>+</button>
    </div>
  );

  const renderButton = (input: IState) => {
    const lastInput = last(inputs);
    if (!lastInput) return;
    if (inputs.length === 1 && input.id === 1) return renderAddButton();
    if (inputs.length > 1 && input.id === 1) return renderAddButton(true);
    return renderActionButtons(input.id);
  };

  const renderChildren = () => {
    const { name, label } = props.children.props;
    return inputs.map((input, index) => {
      const clonedElement = cloneElement(props.children, { value: input.value, id: input.id, label: `${label}: ${index + 1}`, name: `${name}[]` });
      return (
        <div key={input.id} style={outputStyles}>
          {clonedElement}
          {renderButton(input)}
        </div>
      );
    });
  };

  return <div>{renderChildren()}</div>;
};

export default FormFieldMulti;

// https://www.carlrippon.com/react-children-with-typescript/
// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
