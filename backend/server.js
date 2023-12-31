const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});