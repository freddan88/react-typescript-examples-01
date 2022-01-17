import { useState, useEffect } from "react";

/*
Documentation:
  [Props]
    -
*/

interface IProps {}

const Tutorials: React.FC<IProps> = (props) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Run when component mounts
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=f687hBjwFcM" rel="noreferrer noopener" target="_blank">
            React Hooks
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=Z5iWr6Srsj8" rel="noreferrer noopener" target="_blank">
            React Typescript
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=3PtiSy8G-Cs" rel="noreferrer noopener" target="_blank">
            React Events Typescript
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=nViEqpgwxHE" rel="noreferrer noopener" target="_blank">
            Typescript Generics
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=BwuLxPH8IDs" rel="noreferrer noopener" target="_blank">
            Typescript Course
          </a>
        </li>
        <li>
          <a href="https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n" rel="noreferrer noopener" target="_blank">
            React Hooks vs lifecycle-methods
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tutorials;
