import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/signup"} element={<Signup />}></Route>
      <Route path={"/signin"} element={<Signin />}></Route>
    </Routes>
    </>
  );
}

export default App;
