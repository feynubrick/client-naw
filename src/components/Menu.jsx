import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        국회 Watcher
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/mymna">
              내 의원
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/mna">
              의원
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/party">
              정당
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/bill">
              법안
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item">
            <i className="fas fa-user"> 로그인</i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
