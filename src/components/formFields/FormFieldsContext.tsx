import { createContext } from "react";

interface IFormFieldContext {
  name: string;
  value: string;
}

const FormFieldsContext = createContext<IFormFieldContext | null>(null);

export default FormFieldsContext;
