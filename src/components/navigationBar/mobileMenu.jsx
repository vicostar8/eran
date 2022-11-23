import React, { useState } from "react";
import "./css/mobileMenu.css";

const MobileMenu = ({
  toggleMobileMenu,
  mobileToggleSubMenu,
  moveMobileMainMenu,
  mobileSubMenuToDisplay,
  menuItems,
  ocMobileMenu,
}) => {
  return (
    <div
      className={`mobileMenu ${toggleMobileMenu ? "activated" : "deactivated"}`}
    >
      {/* MAIN MENU */}
      <div
        className={`w-100 h-100 leftPanel pos-c-cc position-absolute ${
          mobileToggleSubMenu ? "movedAside-Left" : ""
        }`}
      >
        <ul className={`mobileMenu-mainUl`}>
          {menuItems.map((mI, index) => (
            <li key={`${mI.text}-${index}`} className="mobileMenu-mainLi">
              <a href="#" className="mobileMenu-mainLi-anchor">
                {mI.text}
              </a>
              {mI.hasSubMenu && (
                <i
                  className="ms-2 mobileMenu-mainLi-icon fa-solid fa-arrow-right"
                  onClick={() => moveMobileMainMenu(mI.text)}
                ></i>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* SUB MENU */}
      <div
        className={`w-100 h-100 rightPanel pos-c-cc position-absolute ${
          mobileToggleSubMenu ? "movedAside-Left" : ""
        }`}
      >
        <ul className="mobileMenu-mainUl">
          <i
            className="mobileMenu-mainLi-icon fa-solid fa-arrow-left"
            onClick={() => moveMobileMainMenu("")}
          ></i>
          {mobileSubMenuToDisplay.length === 0
            ? "NOTHING TO DISPLAY"
            : mobileSubMenuToDisplay.map((smI, index) => (
                <li
                  key={`${smI.subMenuText}-${index}`}
                  className="mobileMenu-mainLi"
                >
                  <a href="#" className="mobileMenu-mainLi-anchor">
                    {smI.subMenuText}
                  </a>
                </li>
              ))}
        </ul>
      </div>

      {/* X button */}
      <i
        className="fa-regular fa-circle-xmark closeButton"
        onClick={ocMobileMenu}
      ></i>
    </div>
  );
};

export default MobileMenu;
