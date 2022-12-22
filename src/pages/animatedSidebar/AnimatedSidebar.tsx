import React, { useState } from "react";

interface IProps {}

interface ISubMenu {
  label: string;
  link: string;
}

interface IMenu {
  id: number;
  label: string;
  link?: string;
  subMenu?: ISubMenu[];
}

const menuData: IMenu[] = [
  {
    id: 1,
    label: "Dashboard",
    link: "dashboard",
  },
  {
    id: 2,
    label: "Settings",
    subMenu: [
      {
        link: "account",
        label: "Account",
      },
      {
        link: "about",
        label: "About",
      },
    ],
  },
];

const AnimatedSidebar: React.FC<IProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ul>
        {menuData.map((obj) => {
          return (
            <li key={obj.id}>
              <button type="button" onClick={() => setActiveIndex(obj.id)}>
                {obj.label}
              </button>
              {obj.subMenu && activeIndex === obj.id && (
                <ul>
                  {obj.subMenu.map((subObj) => (
                    <li key={subObj.link}>
                      <button type="button">{subObj.label}</button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AnimatedSidebar;
