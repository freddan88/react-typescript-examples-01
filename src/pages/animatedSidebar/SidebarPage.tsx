import React, { useState, useEffect } from "react";
import "./SidebarPage.css";
import AnimatedSidebar from "./AnimatedSidebar";

interface IProps {}

const SidebarPage: React.FC<IProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Documentation hooks as lifecycle-methods:
    // https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n
  }, []);

  return (
    <div className="page-layout">
      <div className="sidebar-layout">
        <aside>
          <AnimatedSidebar />
        </aside>
        <main>
          <div
            style={{
              padding: "30px 0",
              backgroundColor: "black",
              margin: "0 auto",
              width: "95%",
            }}
          >
            <h1 style={{ color: "white" }}>Page</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarPage;
