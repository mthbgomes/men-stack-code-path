import express from "express";
const router = express.Router();
import controllers from "../controllers/userControllers.js"
router.get("/", controllers.getAll);
router.post("/", controllers.createUser);
router.patch("/:id", controllers.updateUser); //:id indica que depois da barra (localhost:3000/user/) deve ser passado o ID, ou seja (localhost:3000/user/id)
export default router;