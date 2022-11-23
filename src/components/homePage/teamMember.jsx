import React from "react";
import "./css/teamMember.css";

const Team_Member = ({ lastName, firstName, title, imgURL }) => {
  return (
    <div className=" teamMember-container text-center">
      <div className="teamMember-imgDiv pos-c-cc">
        <img src={imgURL} alt="" />
      </div>
      <div className="teamMember-header">{firstName}</div>
      <div className="teamMember-header">{lastName.toUpperCase()}</div>
      <div className="teamMember-subHeader">{title}</div>
    </div>
  );
};

export default Team_Member;
