import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='login-wrapper'>

    <div className="login-container">
    <h1>Login</h1>
    <form action="">
      <div className="box">
        <input type="text" placeholder="Username" required maxlength="25"/>
      </div>
      <div className="box">
        <input type="password" placeholder="Password"	required maxlength="15" />
      </div>
      <input type="submit" className="btn" value="Login" />
    </form>
    <a href=" " className="b1">Forget Password?</a>
    <a href="/signup" className="b2">Create Account</a>
  </div>
    </div>
  )
}

export default Login