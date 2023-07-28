// app.js
const express = require("express");
const { validateCreateUser } = require("./validatorMiddleware");

const app = express();

app.use(express.json());

let users = [];

// Route to create a new user
app.post("/users", validateCreateUser, (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
});

// Route to read all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Route to update a user
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  // Find the user in the array based on the provided ID
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    // Update the user object with the new data
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Route to delete a user
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: "User deleted successfully" });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
