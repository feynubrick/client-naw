import React from "react";

const MemberDropDownMenu = () => {
  return (
    <div className="dropdown dropleft">
      <button
        class="btn btn-light dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-user" />
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <span className="dropdown-item">로그인</span>
        <span className="dropdown-item">회원가입</span>
      </div>
    </div>
  );
};

export default MemberDropDownMenu;
