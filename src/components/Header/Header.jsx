import React from "react";
// import { BiCart } from "react-icons/bi"; //<BiCart />
// import { FaSearch } from "react-icons/fa"; //<BsSearch />
// import { SlLocationPin } from "react-icons/sl"; //<SlLocationPin />;

function Header() {
  return (
    <>
      <section>
        <section>
          <div>
            {/* logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>
            {/* delivery */}
            <span>{/* icon */}</span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
          <div>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            {/* icon */}
          </div>
          <div>
            {/* right side link */}
            <div>
              <img
                src="https://image.shutterstock.com/image-vector/usa-flag-icons-vector-set-260nw-2491312125.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </div>
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & list</span>
              </div>
            </a>
            {/* order */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a to={"/cart"}>
              {/* icon */}
              <span>0</span>
            </a>
          </div>
        </section>
      </section>
    </>
  );
}

export default Header;
