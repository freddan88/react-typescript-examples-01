import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextInput } from "../../components";
import "./form.css";

interface IProps {}

const FormInputs: React.FC<IProps> = (props) => {
  const [inputs, setInputs] = useState<string[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const multiData = [];
    const formState: any = {};

    for (var pair of formData.entries()) {
      if (pair[0].includes("[]")) {
        multiData.push(pair[1]);
      } else {
        formState[pair[0]] = pair[1];
      }
    }

    const formValues = {
      ...formState,
      multiValues: multiData,
    };

    console.log(formValues);

    console.table([...formData]);
  };

  const deleteInput = (uuidv4: string) => {
    setInputs(inputs.filter((uuid) => uuid !== uuidv4));
  };

  const addInput = () => setInputs([...inputs, uuidv4()]);

  const renderFormInputs = () => {
    return inputs.map((uuid) => {
      return (
        <div className="input-container" key={uuid}>
          <TextInput name="extra[]" label="Extra" />
          <button type="button" onClick={() => deleteInput(uuid)}>
            Delete
          </button>
        </div>
      );
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {renderFormInputs()}
      <button type="button" onClick={addInput}>
        Add
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormInputs;
