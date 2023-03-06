import React, { useState, useEffect } from "react";
import MobileMenu from "./mobileMenu";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import "./css/navigationBar.css";

import logo from "../../images/logo/logo-SVG.svg";

const aaa = [
  {
    text: "Home",
    hasSubMenu: true,
    subMenuItems: {
      isActive: false,
      items: [{ subMenuText: "Despre noi" }, { subMenuText: "Pagini utile" }],
    },
  },
  {
    text: "Cursuri",
    hasSubMenu: false,
    subMenuItems: {
      isActive: false,
      items: [],
    },
  },
  {
    text: "Examene",
    hasSubMenu: false,
    subMenuItems: {
      isActive: false,
      items: [],
    },
  },
  {
    text: "Proiecte",
    hasSubMenu: false,
    subMenuItems: {
      isActive: false,
      items: [],
    },
  },
  {
    text: "Traduceri",
    hasSubMenu: false,
    subMenuItems: {
      isActive: false,
      items: [],
    },
  },
  {
    text: "Contact",
    hasSubMenu: false,
    subMenuItems: {
      isActive: false,
      items: [],
    },
  },
];

const NavigationBar = () => {
  // Desktop Menu
  const [menuItems, setMenuItems] = useState(aaa);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  // Mobile Menu
  const [mobileToggleSubMenu, setMobileToggleSubMenu] = useState(false);
  const [mobileSubMenuToDisplay, setMobileSubMenuToDisplay] = useState([]);

  const ocMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
    setMobileToggleSubMenu(false);
  };

  const toggleSubMenu = (textForMenu) => {
    let localMenuItems = menuItems.map((lmI) => {
      if (lmI.text === textForMenu) {
        lmI.subMenuItems.isActive = !lmI.subMenuItems.isActive;
      }
      return lmI;
    });
    setMenuItems(localMenuItems);
  };

  const moveMobileMainMenu = (text) => {
    if (text !== "") {
      const localSubMenu = menuItems.find((mI) => {
        if (mI.text === text) {
          return mI.subMenuItems.items;
        }
      });
      setMobileSubMenuToDisplay(localSubMenu.subMenuItems.items);
    }
    setMobileToggleSubMenu(!mobileToggleSubMenu);
  };

  return (
    <nav className="navBar pos-r-sbc">
      {/* MENIU MOBILE */}
      <MobileMenu
        toggleMobileMenu={toggleMobileMenu}
        mobileToggleSubMenu={mobileToggleSubMenu}
        moveMobileMainMenu={moveMobileMainMenu}
        mobileSubMenuToDisplay={mobileSubMenuToDisplay}
        menuItems={menuItems}
        ocMobileMenu={ocMobileMenu}
      />

      {/* MENIU DESKTOP */}
      <Link to="/" className="navBar-Logo">
        <img src={logo} alt="Eran Logo - Passion for learning" />
      </Link>
      <i
        className="fa-solid fa-bars navBar-toggle-button"
        onClick={ocMobileMenu}
      ></i>
      <div className="navBar-links">
        <ul className="pos-r-sec navBar-links-mainUl">
          {menuItems.map((mI, index) => (
            <li key={mI.text} className="navBar-links-mainLi">
              {/* <a href="#" className="navBar-links-mainLi-anchor">
                {mI.text}
              </a> */}
              <Link
                to={`${
                  mI.text.toLowerCase() === "home"
                    ? "/"
                    : `${mI.text.toLowerCase()}`
                }`}
                className="navBar-links-mainLi-anchor"
              >
                {mI.text}
              </Link>
              {mI.hasSubMenu && (
                <>
                  <i
                    className={`ms-2 navBar-links-mainLi-icon fa-solid fa-caret-${
                      mI.subMenuItems.isActive ? "up" : "down"
                    }`}
                    onClick={() => toggleSubMenu(mI.text)}
                  ></i>
                  <CSSTransition
                    in={mI.subMenuItems.isActive}
                    timeout={500}
                    unmountOnExit
                    classNames="subMenuAnimation"
                  >
                    <div className="navBar-subMenuDiv">
                      {mI.subMenuItems.items.map((smI, index) => (
                        <div
                          key={`${smI.text}-${index}`}
                          className="navBar-subMenuDiv-item my-2"
                        >
                          {/* <a href="#" className="navBar-subMenuDiv-item-anchor">
                            {smI.subMenuText}
                          </a> */}
                          <Link
                            to={`${smI.subMenuText
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                            className="navBar-subMenuDiv-item-anchor"
                          >
                            {smI.subMenuText}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CSSTransition>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
