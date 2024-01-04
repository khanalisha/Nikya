import React from "react";
import { Route } from "react-router-dom";
import { Login } from "../page/Login";
import { SignUp } from "../page/SignUp";
import { Dashboard } from "../component/Dashboard";
import { Home } from "../component/Home";

export const AllRoutes = () => {
  return (
    <div>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/" element={<Home />} />
    </div>
  );
};
