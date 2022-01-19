import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/login", (res) => {
  res.send({
    token: "test123",
  });
});

app.listen(3001, () => console.log("API is running on http://localhost:3001/login"));
