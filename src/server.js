require("dotenv").config()
import express from 'express'
import viewEngine from './config/viewEngine'
import initWebRoute from './routes/web'
import bodyparser from 'body-parser'


let app = express()

//config view engine
viewEngine(app)

//use body parser to post data
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true}))

//init all wenb route
initWebRoute(app)

let port = process.env.PORT || 8082

app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});