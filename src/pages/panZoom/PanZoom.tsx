import { toInteger } from "lodash";
import React, { useCallback, useState } from "react";
import "./panZoom.css";

interface IProps {}

type TMouseActions = "mousedown" | "mousemove" | "mouseleave" | "";

const PanZoom: React.FC<IProps> = (props) => {
  const [draggableState, setDraggableState] = useState({
    initX: 0,
    initY: 0,
    moveX: "",
    moveY: "",
    allowMove: false,
  });

  const moveElementHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, action: TMouseActions = "") => {
    switch (action) {
      case "mousedown":
        const element = e.target as HTMLDivElement;
        const x = e.clientX - element.getBoundingClientRect().left;
        const y = e.clientY - element.getBoundingClientRect().top;
        setDraggableState({
          ...draggableState,
          initX: x,
          initY: y,
          allowMove: true,
        });
        break;
      case "mousemove":
        if (!draggableState.allowMove) return;
        setDraggableState({
          ...draggableState,
          moveX: `${e.pageX - draggableState.initX!}px`,
          moveY: `${e.pageY - draggableState.initY!}px`,
        });
        break;
      default:
        break;
    }
  };

  console.log(draggableState);

  return (
    <div className="attachment">
      <div className="outer_container">
        <div
          className="inner_container"
          onDragStart={(e) => e.preventDefault()}
          onMouseUp={() =>
            setDraggableState({
              ...draggableState,
              allowMove: false,
            })
          }
          onMouseDown={(e) => moveElementHandler(e, "mousedown")}
          onMouseMove={(e) => moveElementHandler(e, "mousemove")}
          style={{ transform: `translateX(${draggableState.moveX}) translateY(${draggableState.moveY})` }}
        >
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80" alt="1234" />
        </div>
      </div>
      <button
        onClick={() =>
          setDraggableState({
            ...draggableState,
            moveX: toInteger(draggableState.moveX) + 10 + "px",
            moveY: "0px",
          })
        }
      >
        Move Left
      </button>
      <button>Move Right</button>
    </div>
  );
};

export default PanZoom;
