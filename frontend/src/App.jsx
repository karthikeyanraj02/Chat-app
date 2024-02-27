import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/user/SignUp";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Dasboard";
import { useAuthContext } from "./context/authContex";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to="/dashboard" /> : <Home />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/dashboard" /> : <SignUp />}
        />

        <Route
          path="/dashboard"
          element={authUser ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
