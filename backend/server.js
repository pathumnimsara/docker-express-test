const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

app.use(express.json());

const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/docker_test";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Express backend is running!"
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    status: "success",
    message: "Backend is connected!"
  });
});

const Test = mongoose.model("Test", {
  message: String
});

app.post("/api/test", async (req, res) => {
  const newTest = new Test({
    message: req.body.message
  });

  await newTest.save();

  res.json({
    message: "Data saved successfully!",
    data: newTest
  });
});

app.get("/api/tests", async (req, res) => {
  const tests = await Test.find();

  res.json(tests);
});