import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  const Menus = [
    { name: "History", icon: "history", dis: "traslate-x-0", link: "/history" },
    { name: "Home", icon: "home", dis: "traslate-x-32", link: "/home" },
    { name: "Setting", icon: "settings", dis: "traslate-x-64", link: "/setting"},
  ];

  const [active, setActive] = useState();

  return (
    <>
      <div className="">
        <div className="bg-slate-100 flex items-center justify-center max-h-[4.5rem] p-5 rounded-t-xl fixed bottom-0 drop-shadow-lg md:hidden w-full">
          <ul className="flex gap-20">
            {Menus.map((menu, i) => (
              <li key={i} className="">
                <NavLink
                  to={menu.link}
                  style={({ isActive, isPending }) => {
                    return { color: isActive ? "#8BCA00" : "inherit" };
                  }}
                  className="flex items-center"
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${i === active}`}
                    id="menu_icon"
                  >
                    {menu.icon}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menubar;
