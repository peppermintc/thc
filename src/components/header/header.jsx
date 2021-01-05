import React from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.png";
import search from "../../images/search.svg";
import Cart from "../header_cart/header_cart";
import WriteButton from "../write_button/write_button";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav>
        <NavLink
          exact
          className={styles.menuItem}
          to="/"
          activeClassName={styles.selected}
        >
          커뮤니티
        </NavLink>
        <NavLink
          exact
          className={styles.menuItem}
          to="/store"
          activeClassName={styles.selected}
        >
          스토어
        </NavLink>
        <NavLink
          exact
          className={styles.menuItem}
          to="/experts"
          activeClassName={styles.selected}
        >
          인테리어시공
        </NavLink>
      </nav>
      <nav className={styles.right_nav}>
        <div className={styles.search}>
          <img className={styles.search_image} src={search} alt="search" />
          <input
            className={styles.search_input}
            type="text"
            placeholder="cloned by peppermint"
          />
        </div>
        <Cart />
        <a className={styles.accountMenuItem} href="#">
          로그인
        </a>
        <div className={styles.vertical_line}></div>
        <a className={styles.accountMenuItem} href="#">
          회원가입
        </a>
        <div className={styles.write_button}>
          <WriteButton />
        </div>
      </nav>
    </div>
  );
};

export default Header;
