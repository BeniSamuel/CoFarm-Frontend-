import React from "react";
import Signup from "./Pages/Signup/Signup";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Chat from "./Pages/Chat/Chat";
import { Toaster } from "react-hot-toast";
import UploadProfile from "./Pages/UploadProfile/UploadProfile";
import Farm from "./Pages/Farms/Farm";

const App = () => {
  // test fn
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/upload-profile" element={<UploadProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/farms" element={<Farm />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            color: "black",
            fontSize: "small"
          },
        }}
      />
    </Router>
  );
};

export default App;
