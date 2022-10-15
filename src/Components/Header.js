import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/'>Awesome Auth</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/login'>Log In</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/register'>Register</Link>
      </div>
    </div>
  );
};

export default Header;
