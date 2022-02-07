import { TextInput } from "../components";
import FormFieldMulti from "../components/FormFieldMulti";

const MountMulti: React.FC = () => {
  return (
    <div>
      <FormFieldMulti>
        <TextInput name="test" />
      </FormFieldMulti>
    </div>
  );
};

export default MountMulti;
