const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message: "Hello! My Node.js Express backend is running in Docker 🚀"
    });
});

app.get("/api/test", (req, res) => {
    res.json({
        status: "success",
        message: "Docker backend is working!"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});