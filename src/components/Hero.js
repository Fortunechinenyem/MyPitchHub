import React from "react";

const Hero = () => {
  return (
    <div className=" text-center mt-5">
      <h2 className="">Welcome Back!</h2>
      <p className="">Login to Continue</p>
      <div className="login">
        <p href="https://mypitchhub.com/" className="btn1 text-white">
          <i className="fab fa-facebook"></i>Log in with Facebook
        </p>

        <p href="https://mypitchhub.com/" className="btn2 text-white">
          <i className="fab fa-google"></i> Log in with Google
        </p>
      </div>
    </div>
  );
};

export default Hero;
