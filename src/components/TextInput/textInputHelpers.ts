import { validationMessages } from "./textInputValidation";

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value;
};

export const handleInvalid = (e: React.FormEvent<HTMLInputElement>) => {
  e.preventDefault();
  return validationMessages(e.currentTarget.validity);
};
