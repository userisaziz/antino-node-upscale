const express = require("express");
const multer = require("multer");

const app = express();
const port = 3000;

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define the upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  res.json({ message: "File uploaded successfully." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
