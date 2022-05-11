import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div>
        <nav className="navbar">
        <div className="navlogo"> KITAB </div>
        <div className="navlinks">
            <ul>
                <li><a href="/books">All Books</a></li>
                <li><a href="/login">Logout</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Header