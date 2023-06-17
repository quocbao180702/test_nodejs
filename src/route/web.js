// phụ trách tất cả các route
import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute  = (app) => {

    router.get('/', homeController.getHomepage);

    router.get('/detail/user/:id',homeController.getDetailPage)

    router.post('/create-user', homeController.createUser)

    router.post('/delete-user', homeController.deleteUser)

    router.get('/edit-user/:id', homeController.geteditUser)

    router.post('/update-user', homeController.updateUser)

    router.get('/home', (req, res) => {
        res.send('<h1>Hello World!!<h1>')
      })
      return app.use('/',router)   
}

module.exports = initWebRoute;