// Dada Ki Jay Ho

import { Router } from "express";
import * as blogController from "../controller/blog";

const router = Router();

router.get("/", blogController.getAllBlogs);
router.post("/", blogController.createBlog);

export default router;
