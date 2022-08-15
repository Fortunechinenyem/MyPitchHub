import React from "react";

const Hero = () => {
  return (
    <div className=" text-center">
      <h2 className="">Welcome Back!</h2>
      <p className="">Login to Continue</p>
      <div className="login">
        <a href="https://mypitchhub.com/" className="btn1 text-white">
          <i className="fab fa-facebook"></i>Log in with Facebook
        </a>

        <a href="https://mypitchhub.com/" className="btn2 text-white">
          <i className="fab fa-google"></i> Log in with Google
        </a>
      </div>
    </div>
  );
};

export default Hero;
