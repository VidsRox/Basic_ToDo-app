//write basic express boilerplate code with express.json() middleware
const express = require('express');
const validate = require('./types') //slightly uglier syntax

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

//expected inputs-
  /* body{
          title: string,
          description: string
  } */


// Routes
app.post("/todo", function(req, res) {
    try {
        const {title, description} = validate.createTodo.parse(req.body)

        res.json({ success: true, message: "Todo created successfully" })
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
})

app.get("/todos", (req, res) => {
  res.send('Hello World!');
});

app.put("/completed", function(req, res) {
    try {
        const {id} = validate.updateTodo.parse(req.body)

        res.json({ success: true, message: "Todo marked as completed, successfully" })
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
