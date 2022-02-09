export const getValidationMessage = (e: React.FormEvent<HTMLInputElement>) => {
  const state = e.currentTarget.validity;
  // console.log(state);
  e.preventDefault();

  switch (true) {
    case state.valueMissing:
      return "Value is missing";
    default:
      return "";
  }
};
