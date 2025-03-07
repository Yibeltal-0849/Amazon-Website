import React from "react";
import { Routes, Route } from "react-router";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import SignUp from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QzfjmGhOo12aWwpqubyYKiQMVqp2ydmifVeORQOBsXSruG72SS8NKooip6kAsjU5U3WF9XDYjV1JVHw8x7ggdBa00hqWEvUZX"
);

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route
          path="/Payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Routing;
