interface IBaseProps {
  required?: boolean;
  label?: string;
  name: string;
}

export interface ITextFieldProps extends IBaseProps {
  errors?: (data: { id: number; error: string }) => void;
  autocomplete?: boolean;
  minlength?: number;
  maxlength?: number;
}

export interface INumberFieldProps extends IBaseProps {
  min?: number;
  max?: number;
}

const baseFieldProps = {
  required: false,
  label: "",
};

export const defaultTextFieldProps = {
  ...baseFieldProps,
  autocomplete: false,
  minlength: null,
  maxlength: null,
};

export const defaultNumberFieldProps = {
  ...baseFieldProps,
  min: null,
  max: null,
};
