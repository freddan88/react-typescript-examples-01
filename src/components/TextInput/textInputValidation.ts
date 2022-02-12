export const validationMessages = (state: ValidityState) => {
  switch (true) {
    case state.valueMissing:
      return "Value is missing";
    default:
      return "";
  }
};
