import React from "react";
import "./Header.css";
function Header() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.href = "/login";
  };

  const gotoBooks = () => {
    window.location.href = "/books";
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navlogo"> KITAB </div>
        <div className="navlinks">
          <ul>
            <li>
              <p onClick={gotoBooks}>All Books</p>
            </li>
            <li>
              {userInfo?.isAdmin === true ? (
                <p href=" " onClick={logout}>
                  Logout
                </p>
              ) : (
                <p href=" " onClick={logout}>
                  Login as Admin
                </p>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
