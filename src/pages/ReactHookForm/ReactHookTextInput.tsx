import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldTypes } from "./ReactHookForm";

interface IProps {
  fieldName: string;
  fieldType: FieldTypes;
  formFieldRegistration: UseFormRegisterReturn<any>;
  fieldDispatch?: (fieldType: FieldTypes, fieldValue: any) => void;
}

const ReactHookTextInput: FC<IProps> = (props) => {
  const { fieldType, fieldName, formFieldRegistration, fieldDispatch } = props;

  return (
    <input
      type={props.fieldType}
      {...formFieldRegistration}
      onChange={(e) => {
        formFieldRegistration.onChange(e);
        if (fieldDispatch) {
          const fieldValue = {
            [fieldName]: e.target.value,
          };
          fieldDispatch(fieldType, fieldValue);
        }
      }}
    />
  );
};

export default ReactHookTextInput;
