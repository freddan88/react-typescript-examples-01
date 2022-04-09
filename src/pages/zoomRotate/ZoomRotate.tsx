import { useState, useEffect, useRef } from "react";
import { MdChevronLeft, MdChevronRight, MdExpandLess, MdExpandMore, MdRestartAlt } from "react-icons/md";
import "./zoomRotate.css";

interface IProps {}

const ZoomRotate: React.FC<IProps> = (props) => {
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [zoom, setZoom] = useState(1);
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    return () => stopTranslate();
  }, []);

  const handleTranslate = (side: string) => {
    intervalRef.current = setInterval(() => {
      if (side === "right") setTranslateX((prevTranslateX) => prevTranslateX + 20);
      if (side === "left") setTranslateX((prevTranslateX) => prevTranslateX - 20);
      if (side === "down") setTranslateY((prevTranslateY) => prevTranslateY + 20);
      if (side === "up") setTranslateY((prevTranslateY) => prevTranslateY - 20);
    }, 50);
  };

  const handleTranslateReset = () => {
    stopTranslate();
    setTranslateY(0);
    setTranslateX(0);
  };

  const stopTranslate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  console.log(zoom);

  return (
    <div className="attachment3">
      <div className="attachment__container3">
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80"
          style={{ transform: `scale(${zoom}) translateX(${translateX}px) translateY(${translateY}px)` }}
          alt="Cat"
        />
      </div>
      <div onMouseLeave={stopTranslate}>
        <button type="button" onMouseDown={() => handleTranslate("right")} onMouseUp={stopTranslate}>
          <MdChevronRight />
        </button>
        <button type="button" onMouseDown={() => handleTranslate("left")} onMouseUp={stopTranslate}>
          <MdChevronLeft />
        </button>
        <button type="button" onMouseDown={() => handleTranslate("down")} onMouseUp={stopTranslate}>
          <MdExpandMore />
        </button>
        <button type="button" onMouseDown={() => handleTranslate("up")} onMouseUp={stopTranslate}>
          <MdExpandLess />
        </button>
        <button type="button" onClick={handleTranslateReset}>
          <MdRestartAlt />
        </button>
        <button type="button" onClick={() => setZoom(zoom + 0.1)}>
          +
        </button>
        <button type="button" onClick={() => setZoom(zoom - 0.1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default ZoomRotate;
