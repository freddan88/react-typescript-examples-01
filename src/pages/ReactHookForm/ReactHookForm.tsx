import { debounce } from "lodash";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import ReactHookTextInput from "./ReactHookTextInput";

export type FieldTypes = "text";

interface IProps {}

const debouncedDispatch = debounce((fieldValue: any) => console.log(fieldValue), 1000);

const ReactHookForm: React.FC<IProps> = (props) => {
  const { register, handleSubmit, getValues } = useForm();

  const fieldRegister = register("firstName", { required: true });

  const onSubmit = (data: any) => console.log(data);

  const dispatchFieldValue = useCallback((fieldType: FieldTypes, fieldName: string) => {
    switch (fieldType) {
      case "text":
        const fieldValue = {
          [fieldName]: getValues(fieldName),
        };
        debouncedDispatch(fieldValue);
        break;
      default:
        break;
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReactHookTextInput fieldType="text" fieldName="firstName" formFieldRegistration={fieldRegister} fieldDispatch={dispatchFieldValue} />
    </form>
  );
};

export default ReactHookForm;
