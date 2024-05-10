import express from "express";
import homeRouter from "./routes/home.js";

const app = express();


// Mount the homeRouter to the '/home' path
app.use("/home", homeRouter);

const port = process.env.PORT || 3000

app.listen(port, ()=> {
  console.log(`port listening at ${port}`);
})
