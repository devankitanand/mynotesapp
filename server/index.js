const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT;
const connectDB = require('./config/db')
app.use(bodyParser.json());
connectDB();
const userRoutes = require('./routes/userRoutes')
const notesRoutes = require('./routes/notesRoutes')

app.use(cors({
  origin: "https://notes13.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.get("/",(req,res)=>{[
    res.json({
      message:"Server Running"
    })
]})

app.use("/user" , userRoutes);
app.use("/notes", notesRoutes );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
