import React, { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      await register(formData);
      navigate("/signin");
    } catch (err) {
      console.error(err);
      alert("회원가입 실패");
    }
  };

  return (
    <div>
      <h1>회원가입을 해주세요</h1>
      <AuthForm mode={"signup"} onSubmit={handleSignUp} />
    </div>
  );
};

export default Signup;
