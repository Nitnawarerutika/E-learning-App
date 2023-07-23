import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            {/* Second Task */}
            <Link to="/">
              <img
                className={style.logo}
                // src="https://files.codingninjas.in/pl-ninja-16706.svg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugca4KPKIKYkC2sBbwO6AOY3ltvx2ipeD5A&usqp=CAU"
                alt="logo"
              />
            </Link>
            <h4>Coder</h4>
          </div>
          <div className={style.nav_details}>
            <button>
               {/* Second Task */}
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
