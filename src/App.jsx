import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CreatePage from "./CreatePage";
import UserProvider from "./contexts/UserProvider";
import Layout from "./Layout";
import UpdatePage from "./UpdatePage";
import GlobalStyle from "./GlobalStyles";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Router />
    </UserProvider>
  );
}

export default App;