interface ITodo {
  done?: boolean;
  title?: string;
  id?: number;
}

export interface IAction {
  type: "CREATE_TODO" | "DELETE_TODO" | "TOGGLE_TODO";
  payload: ITodo;
}

export type TState = ITodo[];

export const todoReducer = (state: TState, action: IAction) => {
  switch (action.type) {
    case "CREATE_TODO":
      const id = state.length + 1;
      return [...state, { ...action.payload, id }];
    case "DELETE_TODO":
      return state.filter((obj) => obj.id !== action.payload.id);
    case "TOGGLE_TODO":
      const updatedState = state.map((obj) => {
        if (obj.id === action.payload.id) {
          return {
            ...obj,
            done: !obj.done,
          };
        }
        return obj;
      });
      return updatedState;
    default:
      return state;
  }
};
