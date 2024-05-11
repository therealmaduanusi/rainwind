import express from "express"
import axios from "axios"
import bodyParser from "body-parser"
import env from "dotenv"
import ejsLayouts from "express-ejs-layouts"

// const app = express()
const homeRouter = express.Router();
// const port = process.env.PORT || 3000
const API_URL = "https://api.openweathermap.org/data/2.5/weather"
env.config()

const weather_apiKey = process.env.apikey;


homeRouter.use(bodyParser.urlencoded({ extended: true }));

homeRouter.use(ejsLayouts);

homeRouter.get('/', (req, res) => {
  res.render('index.ejs')
})

homeRouter.post("/get-weather", async (req, res) => {
  const cityName = req.body.city;
  // const lon = req.body.lon;
  // console.log(searchId);
  // res.redirect('/')
  // res.render('index.ejs', {
  //     content: searchId
  // })
  const queryParams = {
      params: {
          q: cityName,
          // lon: lon,
          apikey: weather_apiKey
      },
  };
  try {
    const result = await axios.get(API_URL, queryParams);
  //   console.log(result);
    res.render("index.ejs", { content: result.data });
  } catch (error) {
      console.log(error.response.data);
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

export default homeRouter;

// app.listen(port, () => {
//     console.log(`port listening at ${port}`);
// })