import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

}

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold mb-10">Please Login Here!!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-4xl bg-base-300">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover font-semibold text-blue-700">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button 
                className="btn border-0 font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 ...">
                    Login
                    </button>
                    <p className="font-semibold"><small>Don't have an account? <Link to='/register' className="link link-primary">Register</Link></small></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
