import { useReducer } from "react";
import { FormTextField } from "../components/formFields";
import formFieldsReducer from "../components/formFields/formFieldsReducer";
import { FormContext } from "../features/contexts";

interface IProps {}

const InputPage: React.FC<IProps> = (props) => {
  const [inputs, dispatch] = useReducer(formFieldsReducer, {});

  console.log(inputs);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <FormContext.Provider value={dispatch}>
      <form onSubmit={handleSubmit}>
        <FormTextField name="name" label="Your name" required />
        <br />
        <FormTextField name="email" label="Your email" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </FormContext.Provider>
  );
};

export default InputPage;
