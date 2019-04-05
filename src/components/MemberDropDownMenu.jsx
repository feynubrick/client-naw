import React from "react";
import { Link } from "react-router-dom";
const MemberDropDownMenu = () => {
  return (
    <div className="dropdown dropleft">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fas fa-user" />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to="/login">
          <span className="dropdown-item">로그인</span>
        </Link>
        <Link to="/signin">
          <span className="dropdown-item">회원가입</span>
        </Link>
      </div>
    </div>
  );
};

export default MemberDropDownMenu;
