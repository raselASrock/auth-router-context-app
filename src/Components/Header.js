
import { error } from "daisyui/src/colors";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
const handleSignOut = () =>{
    logOut()
    .then(() =>{})
    .catch( error => console.error(error))
}

  
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/'>Awesome Auth</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/'>Home</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/login'>Log In</Link>
        <Link className="btn btn-ghost normal-case text-xl text-white" to='/register'>Register</Link>
        {user?.email && <span>Welcome {user.email}</span>}
        <button onClick={handleSignOut} className="btn btn-ghost normal-case text-xl text-white">Log Out</button>
      </div>
    </div>
  );
};

export default Header;
