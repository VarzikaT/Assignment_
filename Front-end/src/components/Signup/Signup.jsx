import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"
function Signup() {
  return (
    <div className='signup-wrapper'>

    <div className="signup-container">
    <h1>Signup</h1>
    <form action="">

    <div className="box">
        <input type="text" placeholder="Name"	required maxlength="25" />
      </div>
      <div className="box">
        <input type="text" placeholder="Username" required maxlength="25"/>
      </div>
      <div className="box">
        <input type="password" placeholder="Password"	required maxlength="15" />
      </div>

      <input type="submit" className="btn" value="Signup" />
    </form>
    <a href="/login" className="b2">Already have an account ? Login here</a>
  </div>
    </div>
  )
}

export default Signup