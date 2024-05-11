import express from "express";
import homeRouter from "./routes/home.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import ejsLayouts from "express-ejs-layouts"

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
app.use(ejsLayouts);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for views
app.set("views", __dirname + "/views");

// Mount the homeRouter to the '/home' path
app.use("/", homeRouter);


const port = process.env.PORT || 3000

app.listen(port, ()=> {
  console.log(`port listening at ${port}`);
})
