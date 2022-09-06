import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldTypes } from "./ReactHookForm";

interface IProps {
  fieldName: string;
  fieldType: FieldTypes;
  formFieldRegistration: UseFormRegisterReturn<any>;
  fieldDispatch?: (fieldType: FieldTypes, fieldName: string) => void;
}

const ReactHookTextInput: FC<IProps> = (props) => {
  const { fieldType, fieldName, formFieldRegistration, fieldDispatch } = props;

  return (
    <input
      type={props.fieldType}
      {...formFieldRegistration}
      onChange={(e) => {
        formFieldRegistration.onChange(e);
        if (fieldDispatch) fieldDispatch(fieldType, fieldName);
      }}
    />
  );
};

export default ReactHookTextInput;
