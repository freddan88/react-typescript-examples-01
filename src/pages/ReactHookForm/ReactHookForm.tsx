import React from "react";
import { useForm } from "react-hook-form";
import ReactHookTextInput from "./ReactHookTextInput";

interface IProps {}

const ReactHookForm: React.FC<IProps> = (props) => {
  const { register, handleSubmit, getValues } = useForm();

  const fieldRegister = register("firstName", { required: true });

  const onSubmit = (data: any) => console.log(data);

  const dispatchFieldValue = (fieldType: "text", fieldName: string) => {
    switch (fieldType) {
      case "text":
        console.log({
          [fieldName]: getValues(fieldName),
        });
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReactHookTextInput fieldType="text" fieldFormRegistration={fieldRegister} fieldName="firstName" getFieldValues={getValues} fieldDispatch={dispatchFieldValue} />
    </form>
  );
};

export default ReactHookForm;
