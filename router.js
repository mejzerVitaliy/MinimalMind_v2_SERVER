import { Router } from "express";
import PostController from "./UserController.js";

const router = new Router();

router.post('/users', PostController.create);
router.get('/users', PostController.getAll);
router.get('/users/:id', PostController.getOne);
router.put('/users', PostController.update);
router.delete('/users/:id', PostController.delete)

export default router;