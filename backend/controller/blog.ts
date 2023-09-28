// Dada Ki Jay Ho

import { Request, Response } from "express";
import Blog from "../models/blog";

export const getAllBlogs = async (req: Request, res: Response) => {
    try {
        return res.send(await Blog.find({}));
    } catch (error) {
        return res.status(500).send(error);
    }
};

export const createBlog = async (req: Request, res: Response) => {
    try {
        const {
            body: { title, content },
        } = req;

        const newBlog = new Blog({ title, content });
        await newBlog.save();

        return res.send("new blog added successfully");
    } catch (error) {
        return res.status(500).send(error);
    }
};
