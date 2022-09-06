import { FC, useEffect, useState } from "react";
import { FieldValues, UseFormGetValues, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  fieldType: "text";
  fieldName: string;
  fieldFormRegistration: UseFormRegisterReturn<any>;
  getFieldValues: UseFormGetValues<FieldValues>;
  fieldDispatch: (fieldType: "text", fieldValue: string) => void;
}

const ReactHookTextInput: FC<IProps> = (props) => {
  const { fieldType, fieldName, fieldFormRegistration, getFieldValues, fieldDispatch } = props;
  const [fieldValue, setFieldValue] = useState(getFieldValues(fieldName));

  useEffect(() => {
    const debouncedTimer = setTimeout(() => {
      fieldDispatch(fieldType, fieldName);
    }, 1000);
    return () => {
      clearTimeout(debouncedTimer);
      console.log("Cleared Timer");
    };
  }, [fieldValue]);

  return (
    <input
      type={props.fieldType}
      {...fieldFormRegistration}
      onChange={(e) => {
        fieldFormRegistration.onChange(e);
        setFieldValue(e.target.value);
        // fieldDispatch(fieldType, fieldName);
      }}
    />
  );
};

export default ReactHookTextInput;
