import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database not connected",err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

