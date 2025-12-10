import express from "express";
import * as controller from "../controllers/todoController.js";

const router = express.Router();

router.get("/", controller.getTodos);
router.post("/", controller.addTodo);
router.patch("/:id", controller.toggleTodo);
router.delete("/:id", controller.deleteTodo);

export default router;