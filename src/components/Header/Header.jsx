import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BiBasketball } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";

import Button from "../Button/Button";

import Navs from "./Navs";

export default function Header() {


  return (
    <header className={`${s.flex} ${s.containerHeader}`}>
      <div className={s.contentHeader}>
        <div className={`${s.flex} ${s.containerSocialMedia}`}>
          <div className={`${s.flex} ${s.contentSocialMedia}`}>
            <ul className={s.socialMediaOne}>
              <li>+1 212 946 2700</li>
              <li>Help Desk</li>
              <li>Why Sway</li>
            </ul>
            <ul className={s.socialMediaTwo}>
              <li>
                <GrFacebookOption />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <BiBasketball />
              </li>
            </ul>
          </div>
        </div>
        <nav className={`${s.flex} ${s.contentNav}`}>
          <div className={s.logo}>LIBEL ACADEMY</div>
          <div className={`${s.flex} ${s.contentNavRight}`}>
            <ul>
              {Navs.map((nav, i) => (
                <li key={i}>
                  {nav.dropdown ? (
                    <Button
                      addClass={`${s.itemNavigation}${i === 0  /* This is just as an example */ ? ` ${s.navActive}` : ''}`}
                      onClick={() => console.log("Example click")}
                    >
                      <span>{nav.title}</span>
                      {nav.dropdown && <IoIosArrowDown />}
                    </Button>
                  ) : (
                    <Button
                      addClass={s.itemNavigation}
                      href={`#${nav.title.toLowerCase()}`}
                    >
                      <span>{nav.title}</span>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
            <div className={`${s.itemNavigation} ${s.itemShoppingCard}`}>
              <Button addClass={s.btnNavRight}>
                <FiShoppingCart />
              </Button>
            </div>
            <div className={s.itemNavigation}>
              <Button addClass={s.btnNavRight}>
                <BsSearch />
              </Button>
            </div>
            <div className={`${s.itemNavigation} ${s.itemContact}`}>
              <NavLink className={s.btnNavRight} to="/contact">Contact Us</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
