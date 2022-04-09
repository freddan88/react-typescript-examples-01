import React, { useCallback, useReducer } from "react";
import { defaultDraggableState, draggableStateReducer } from "./draggableStateReduces";
import "./draggable.css";

interface IProps {}

type TMouseActions = "mousedown" | "mousemove" | "mouseleave" | "";

const Draggable: React.FC<IProps> = (props) => {
  const [draggableState, dispatch] = useReducer(draggableStateReducer, defaultDraggableState);

  const moveElementHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, action: TMouseActions = "") => {
      switch (action) {
        case "mousedown":
          const element = e.target as HTMLDivElement;
          dispatch({
            type: "SET_POSITION",
            payload: {
              x: e.clientX - element.getBoundingClientRect().left,
              y: e.clientY - element.getBoundingClientRect().top,
            },
          });
          break;
        case "mousemove":
          if (!draggableState.allowMove) return;
          dispatch({
            type: "UPDATE_POSITION",
            payload: {
              left: `${e.pageX - draggableState.x!}px`,
              top: `${e.pageY - draggableState.y!}px`,
            },
          });
          break;
        case "mouseleave":
          if (draggableState.allowMove) {
            dispatch({ type: "RESET_POSITION" });
          }
          break;
        default:
          dispatch({ type: "DISABLE_UPDATE" });
          break;
      }
    },
    [dispatch, draggableState]
  );

  return (
    <div style={{ display: "flex" }}>
      <div className="attachment" onMouseLeave={(e) => moveElementHandler(e, "mouseleave")}>
        <div
          className="attachment__container"
          onDragStart={(e) => e.preventDefault()}
          onMouseUp={() => dispatch({ type: "DISABLE_UPDATE" })}
          onMouseDown={(e) => moveElementHandler(e, "mousedown")}
          onMouseMove={(e) => moveElementHandler(e, "mousemove")}
          style={{ left: draggableState.left, top: draggableState.top }}
        >
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80" alt="draggable" />
        </div>
      </div>
      <button type="button" onClick={() => dispatch({ type: "RESET_POSITION" })}>
        RESET
      </button>
    </div>
  );
};

export default Draggable;
