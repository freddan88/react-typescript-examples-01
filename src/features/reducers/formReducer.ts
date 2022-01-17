import { ILooseObject } from "../reducers";

interface IAction extends ILooseObject {
  name: string;
  value: string;
}

type TState = IAction | {};

const formReducer = (state: TState, action: IAction) => {
  return { ...state, [action.name]: { ...action } };
};

export default formReducer;
