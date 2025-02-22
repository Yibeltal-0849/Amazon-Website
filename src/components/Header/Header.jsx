import React from "react";
import { BiCart } from "react-icons/bi"; //<BiCart />
import { FaSearch } from "react-icons/fa"; //<BsSearch />
import { SlLocationPin } from "react-icons/sl";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              {/* delivery */}
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            {/* search icon */}
            <FaSearch size={25} />
          </div>
          <div className={classes.order_container}>
            {/* right side link */}
            <a href="" className={classes.language}>
              <img
                src="https://cdn.pixabay.com/photo/2017/01/07/16/55/usa-1960922_640.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>Sign In</p>
              <span>Account & list</span>
            </a>
            {/* order */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
