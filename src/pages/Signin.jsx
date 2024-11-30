import React from "react";
import AuthForm from "../components/AuthForm";
import { getUserProfile, login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Signin = ({setUser}) => {
  const navigate = useNavigate();
  const handleSignIn = async (formData) => {
    try {
      const data = await login(formData);
      const userData = await getUserProfile(data.accessToken)
      setUser(userData);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      alert("로그인 실패");
    }
  };
  return (
    <div>
      <h1>로그인을 해주세요</h1>
      <AuthForm mode={"signin"} onSubmit={handleSignIn} />
    </div>
  );
};

export default Signin;
