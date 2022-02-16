interface ILooseObject {
  [key: string]: any;
}

export interface IAction extends ILooseObject {
  name: string;
  value: string;
}

type TState = IAction | {};

const formFieldsReducer = (state: TState, action: IAction) => {
  return { ...state, [action.name]: action.value };
};

export default formFieldsReducer;
