import express from "express";
import users from "./api/fetchUser.js";
const app = express();


app.use("/api", users);

app.get('/api', (req, res) => {
    res.json({
        message:"API",
    });
});

export default app;