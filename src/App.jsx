import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/signup"} element={<Signup />}></Route>
      <Route path={"/signin"} element={<Signin setUser={setUser} />}></Route>
      <Route path={"/profile"} element={<Profile user={user} />}></Route>
    </Routes>
    </>
  );
}

export default App;
