import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import TestResult from "./pages/TestResult";

// 로그인 상태일 때 해당 페이지 접근 가능, 아니면 login 페이지로 강제 이동
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

// 로그인 상태가 아닐 때, 해당 페이지(login) 접근 가능, 로그인 상태면 profile 페이지로 이동
const PublicRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? element : <Navigate to="/profile" />;
};

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<PublicRoute element={<Login />} />} />
            <Route
              path="signup"
              element={<PublicRoute element={<Signup />} />}
            />
            <Route
              path="profile"
              element={<PrivateRoute element={<Profile />} />}
            />
            <Route path="test" element={<PrivateRoute element={<Test />} />} />
            <Route
              path="results"
              element={<PrivateRoute element={<TestResult />} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
