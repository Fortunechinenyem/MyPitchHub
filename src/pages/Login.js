import React from "react";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LoginBody from "../components/LoginBody";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <article>
      <Navbar />
      <Hero />
      <LoginBody />

      <Footer />
    </article>
  );
};

export default Login;
