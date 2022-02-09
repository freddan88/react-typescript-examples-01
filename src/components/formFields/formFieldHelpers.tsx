export const getAutoCompleteValue = (autocomplete: boolean = false) => (autocomplete ? "on" : "off");

export const getFormFieldStyles = () => {
  return "";
};

export const renderLabel = (fieldName: string, fieldLabel: string, fieldRequired: boolean = false, fieldStyles: any) => (
  <label htmlFor={fieldName}>
    {fieldLabel}
    {fieldRequired && <span>*</span>}
  </label>
);
