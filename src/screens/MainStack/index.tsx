import React from 'react'
import { MemoryRouter, Routes, Route } from "react-router";
import Product from './Product/index.jsx';

function MainNavigator() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </MemoryRouter>
  )
}

export default MainNavigator