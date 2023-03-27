import React from 'react';
import logo from "../../images/Logo.svg";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="navbar ema-jhon-nav-bar text-white">
              <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} /></a>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  <li><a>Order</a></li>
                  <li><a>Order Review</a></li>
                  <li><a>Manage Inventory</a></li>
                  <li><a>Login</a></li>
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Header;