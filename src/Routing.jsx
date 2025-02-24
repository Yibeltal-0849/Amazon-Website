import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import SignUp from "./Pages/Auth/SignUp";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/Payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Routing;
