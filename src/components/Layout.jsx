import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, isAuthenticated, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <div>
      <nav className="flex items-center justify-between gap-5 h-[60px] px-5">
        <Link to={"/"}>Home</Link>
        {isAuthenticated ? (
          <>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/test"}>Test</Link>
            <Link to={"/results"}>TestList</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div className="flex gap-3">
            <Link to={"/signin"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
          </div>
        )}
      </nav>
      <main className="max-w-[700px] mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
