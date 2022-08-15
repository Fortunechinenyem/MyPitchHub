import React from "react";

const LoginBody = () => {
  return (
    <form className="w-25 mx-auto mb-5 mt-3">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Email Address"
        />
      </div>
      <label for="exampleFormControlInput1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="Enter Password"
        placeholder="Enter Password"
      />
      <a
        href="https://mypitchhub.com/"
        className="btn3 mb-3 mt-5 text-center text-white"
      >
        Log In
      </a>
    </form>
  );
};

export default LoginBody;
