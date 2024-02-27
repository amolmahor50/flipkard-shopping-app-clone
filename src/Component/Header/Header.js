import React from 'react'
import "./Header.css";

function Header(){
  return (
    <div>
        <nav className='header'>
            <div className="logo">
            <h2>Shop-Bazar</h2>
            </div>
            <div className="search">
                <input type="text" placeholder='Search for product brands and more' />
                <i className="fa-solid fa-magnifying-glass search-bar"></i>
            </div>
            <button className='loginBtn'>Login</button>
            <ul className="menu">
                <li><a href="">Become a Seller</a></li>
                <li><a href="">More<i className="fa-solid fa-angle-down"></i></a></li>
                <li><a href=""><i className="fa-solid fa-cart-shopping"></i>Cart</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;