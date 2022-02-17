import { createContext, Dispatch } from "react";
import { IAction } from "./formFieldsReducer";

interface IFormFieldContext {
  name: string;
  value: string;
}

// <IFormFieldContext | null>
// <React.Dispatch<IAction>>

const FormFieldsContext = createContext<Dispatch<IAction> | null>(null);

export default FormFieldsContext;
