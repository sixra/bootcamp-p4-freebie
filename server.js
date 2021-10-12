import express from "express";

import cors from "cors";
import connectDB from "./config/db.js";
import fileUpload from "express-fileupload"

// routes
import itemRoutes from "./routes/api/items.js";
import userRoutes from "./routes/api/users.js";
import contactRoutes from "./routes/api/contact.js";
import activateRoutes from "./routes/api/activate.js";
import avatarRoutes from "./routes/api/upload.js"

connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(fileUpload({
  useTempFiles: true
}))
app.use(cors());

// Use Routes
app.use("/api/items", itemRoutes);
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/activate/user", activateRoutes);
app.use("/api/avatar", avatarRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT} `)
);

// ???
// app.use(bodyParser.json());
