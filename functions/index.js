import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

// Load environment variables (only needed for local development)
dotenv.config();

// Correct way to use Stripe with Firebase
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

// Firebase function export and used as listen
export const api = onRequest(app);
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    // console.log("payment received ", total);
    // res.send(total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "the total must be greater than zero",
    });
  }
});
