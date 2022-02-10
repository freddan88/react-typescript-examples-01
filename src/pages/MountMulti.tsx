import { TextInput } from "../components";
import FormFieldMulti from "../components/FormFieldMulti";

const MountMulti: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormFieldMulti>
        <TextInput name="test" />
      </FormFieldMulti>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MountMulti;
