export const defaultDraggableState = {
  x: 0,
  y: 0,
  left: "25%",
  top: "30px",
  allowMove: false,
};

interface IBaseDraggableState {
  x?: number;
  y?: number;
  left?: string;
  top?: string;
}

interface IDraggableState extends IBaseDraggableState {
  allowMove?: boolean;
}

interface IDraggableAction {
  type: "RESET_POSITION" | "SET_POSITION" | "UPDATE_POSITION" | "DISABLE_UPDATE";
  payload?: IBaseDraggableState;
}

export const draggableStateReducer = (draggableState: IDraggableState, draggableAction: IDraggableAction) => {
  switch (draggableAction.type) {
    case "RESET_POSITION":
      return defaultDraggableState;
    case "SET_POSITION":
      return {
        ...draggableState,
        allowMove: true,
        x: draggableAction?.payload?.x,
        y: draggableAction?.payload?.y,
      };
    case "UPDATE_POSITION":
      return {
        ...draggableState,
        left: draggableAction?.payload?.left,
        top: draggableAction?.payload?.top,
      };
    case "DISABLE_UPDATE":
      return {
        ...draggableState,
        allowMove: false,
      };
    default:
      return draggableState;
  }
};
