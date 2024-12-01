import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;
  return (
    <>
      <Layout isAuthenticated={isAuthenticated} setUser={setUser}>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/signup"} element={<Signup />}></Route>
          <Route
            path={"/signin"}
            element={<Signin setUser={setUser} />}
          ></Route>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path={"/profile"} element={<Profile user={user} />}></Route>
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
