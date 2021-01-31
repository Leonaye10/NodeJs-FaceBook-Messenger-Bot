import express from 'express'
import chatBotController from '../controllers/chatBotController'
import homepageController from '../controllers/homepageController'

let router = express.Router()

let initWeRoutes = (app) => {
    router.get("/", homepageController.getHomepage)
    router.get("/webhook", chatBotController.getWebHook)
    router.post("/wrbhook", chatBotController.postWebHook)

    return app.use("/", router);
}

module.exports = initWeRoutes;