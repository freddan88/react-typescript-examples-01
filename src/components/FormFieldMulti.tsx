import { useState, ReactNode, cloneElement, useRef, useEffect } from "react";
import { last, isEmpty } from "lodash";

interface IProps {
  children: JSX.Element & ReactNode & any;
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
  const [error, setError] = useState<string>("");

  const getChildErrors = (error: string) => {
    setError(error);
  };

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
    return inputs.map((input) => {
      const clonedElement = cloneElement(props.children, { value: input.value, id: input.id, errors: getChildErrors });
      return (
        <div key={input.id} style={outputStyles}>
          {clonedElement}
          {renderButton(input)}
        </div>
      );
    });
  };

  return (
    <div>
      <label style={{ color: error ? "red" : "black" }}>Multi</label>
      {renderChildren()}
    </div>
  );
};

export default FormFieldMulti;

// https://www.carlrippon.com/react-children-with-typescript/
// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
