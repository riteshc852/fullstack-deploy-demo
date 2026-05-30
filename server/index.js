import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  cors({
    origin: [
        "http://localhost:5173", "http://localhost:5174" , "http://localhost:3000" , "http://13.201.86.163:5000"],
  }),
);

// API route

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server is running on port ${PORT}`);
});
