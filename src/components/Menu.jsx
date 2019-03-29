import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        <li>
          <NavLink to="/mymna">내 의원</NavLink>
        </li>
        <li>
          <NavLink to="/mna">의원</NavLink>
        </li>
        <li>
          <NavLink to="/party">정당</NavLink>
        </li>
        <li>
          <NavLink to="/bill">법안</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
