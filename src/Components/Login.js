import React from "react";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold mb-10">Please Login Now!!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-4xl bg-base-300">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-semibold text-blue-700">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-0 font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 ...">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
