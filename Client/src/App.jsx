import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Context
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home/index";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Meals from "./pages/Meals";
import Services from "./pages/Services/index";
import Contact from "./pages/Contact";
import ChoosePlan from "./pages/ChoosePlan/index";
import SpecialCuisine from "./pages/SpecialCuisine/index.jsx";
import Admin from "./pages/admin/admin";
import Cart from "./pages/Cart";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Home route with layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>

            {/* Other main routes with the common layout */}
            <Route element={<Layout />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/meals" element={<Meals />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/plans" element={<ChoosePlan />} />
              <Route path="/special-cuisines" element={<SpecialCuisine />} />
              {/* Protected Cart Route - Requires Login */}
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              {/* Protected Admin Route */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
