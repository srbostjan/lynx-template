import React from 'react'
import { MemoryRouter, Routes, Route } from "react-router";
import Login from './Login/index.jsx';

function AuthNavigator() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </MemoryRouter>
  )
}

export default AuthNavigator