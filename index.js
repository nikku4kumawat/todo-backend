const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;

const cors = require("cors");

// ✅ CORS middleware (ENOUGH for preflight)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// import todo routes
const todoRoutes = require('./routes/todos');

// mount routes
app.use("/api/v1", todoRoutes);

// database connection
const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
  res.send("Welcome to todo api");
});

// server
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
