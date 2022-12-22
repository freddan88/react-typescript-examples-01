import React, { useState, useEffect } from "react";

interface IProps {}

const AnimatedSidebar: React.FC<IProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Documentation hooks as lifecycle-methods:
    // https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n
  }, []);

  return (
    <div>
      <ul>
        <li>
          <button type="button">Test</button>
        </li>
      </ul>
    </div>
  );
};

export default AnimatedSidebar;
