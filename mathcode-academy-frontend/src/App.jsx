import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Topics from "./pages/Topics";
import ProblemSet from "./pages/ProblemSet";
import Problem from "./pages/Problem";
import Leaderboard from "./pages/Leaderboard";
import Contest from "./pages/Contest";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/topics" element={<ProtectedRoute><Topics /></ProtectedRoute>} />
        <Route path="/problemset/:id" element={<ProtectedRoute><ProblemSet /></ProtectedRoute>} />
        <Route path="/problem/:id" element={<ProtectedRoute><Problem /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/contest" element={<ProtectedRoute><Contest /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}