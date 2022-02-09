export const validationMessages = (state: ValidityState) => {
  // console.log(state);
  switch (true) {
    case state.valueMissing:
      return "Value is missing";
    default:
      return "";
  }
};
