import { debounce } from "lodash";
import { useReducer } from "react";
import { FormContext } from "../features/contexts";
import { FormTextField } from "../components/formFields";
import formFieldsReducer from "../components/formFields/formFieldsReducer";

interface IProps {}

const prepareDispatch = (fieldValue: string) => {
  const dataObject = {
    fieldId: 12,
    value: fieldValue,
  };
  console.log(dataObject);
};

const debouncedDispatch = debounce((fieldValue: string) => prepareDispatch(fieldValue), 1000);

const debounceValue = true;

const InputPage: React.FC<IProps> = (props) => {
  const [inputs, dispatch] = useReducer(formFieldsReducer, {});

  // console.log(inputs);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    // console.log(inputs);
  };

  return (
    <div>
      <label htmlFor="uncontrolled-input">Uncontrolled</label>
      <br />
      <input
        type="text"
        name="uncontrolled"
        defaultValue="123"
        id="uncontrolled-input"
        onChange={(e) => {
          console.log(e.target.value);
          if (debounceValue) debouncedDispatch(e.target.value);
        }}
      />
      <br />
      <br />
      <FormContext.Provider value={dispatch}>
        <form onSubmit={handleSubmit}>
          <FormTextField name="name" label="Your name" required />
          <br />
          <FormTextField name="email" label="Your email" required />
          <br />
          <button type="submit">Submit</button>
        </form>
      </FormContext.Provider>
    </div>
  );
};

export default InputPage;
