import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div>
        <nav className="navbar">
        <div className="navlogo"> KITAB</div>
        <a href="#" className="ham">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <div className="navlinks">
            <ul>
                <li><a href="#">All Books</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header