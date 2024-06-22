const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app  =  express();
const port = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth',authRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});