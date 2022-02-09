import { FormTextField } from "../components/formFields";

interface IProps {}

const InputPage: React.FC<IProps> = (props) => {
  return (
    <form>
      <FormTextField name="test" label="Test" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputPage;
