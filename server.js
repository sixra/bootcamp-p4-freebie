import express from "express";
import path from "path";
import cors from "cors";
import connectDB from "./config/db.js";
import fileUpload from "express-fileupload";

// routes
import itemRoutes from "./routes/api/items.js";
import userRoutes from "./routes/api/users.js";
import contactRoutes from "./routes/api/contact.js";
import contactUserRoutes from "./routes/api/contactUser.js";
import activateRoutes from "./routes/api/activate.js";
import avatarRoutes from "./routes/api/upload.js";
import favoriteRoute from "./routes/api/favorite.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());

// Use Routes
app.use("/api/items", itemRoutes);
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/contact/user", contactUserRoutes);
app.use("/api/activate/user", activateRoutes);
app.use("/api/avatar", avatarRoutes);
app.use("/api/favorite", favoriteRoute);

if (process.env.NODE_ENV === "production") {
  // Set static folder path
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT} `)
);

// ???
// app.use(bodyParser.json());
