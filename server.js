import express from "express";

import cors from "cors";
import connectDB from "./config/db.js";

// routes
import authRoutes from "./routes/api/auth.js";
import itemRoutes from "./routes/api/items.js";
import userRoutes from "./routes/api/users.js";
import contactRoutes from "./routes/api/contact.js";

connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Use Routes
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT} `)
);

// ???
// app.use(bodyParser.json());
