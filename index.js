import express from "express";
import homeRouter from "./routes/home.js";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

// console.log(app.use(ejsLayouts).locals.settings.views);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for views
app.set("views", __dirname + "/views");

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Specify the directory where your static files (CSS, images, etc.) are located
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public', { 
//   setHeaders: (res, path, stat) => {
//     if (path.endsWith('.css')) {
//       res.setHeader('Content-Type', 'text/css');
//     }
//   }
// }))
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
});

// Mount the homeRouter to the root path
app.use("/", homeRouter);


const port = process.env.PORT || 3000

app.listen(port, ()=> {
  console.log(`port listening at ${port}`);
})
