import { debounce } from "lodash";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import ReactHookTextInput from "./ReactHookTextInput";

export type FieldTypes = "text";

interface IProps {}

const debouncedDispatch = debounce((fieldValue: any) => console.log(fieldValue), 1000);

const ReactHookForm: React.FC<IProps> = (props) => {
  const { register, handleSubmit, getValues, formState, watch } = useForm({
    defaultValues: {
      firstName: "Fredrik",
      lastName: "",
    },
  });

  const fieldRegisterFistName = register("firstName", { required: true });
  const fieldRegisterLastName = register("lastName", { required: true });

  const onSubmit = (data: any) => console.log(data);

  const dispatchFieldValue = useCallback((fieldType: FieldTypes, fieldValue: any) => {
    switch (fieldType) {
      case "text":
        debouncedDispatch(fieldValue);
        break;
      default:
        break;
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReactHookTextInput fieldType="text" fieldName="firstName" formFieldRegistration={fieldRegisterFistName} fieldDispatch={dispatchFieldValue} />
      <br />
      <br />
      <ReactHookTextInput fieldType="text" fieldName="lastName" formFieldRegistration={fieldRegisterLastName} fieldDispatch={dispatchFieldValue} />
    </form>
  );
};

export default ReactHookForm;
