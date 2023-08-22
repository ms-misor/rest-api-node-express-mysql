const express = require("express");
const app = express();

require('dotenv').config();

const postsRouter = require('./routes/posts.router');
const customRouter = require('./routes/custom.router');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/custom", customRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server Running");
})
