"use strict";
// Dada Ki Jay Ho
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlog = exports.getAllBlogs = void 0;
const blog_1 = __importDefault(require("../models/blog"));
const getAllBlogs = async (req, res) => {
    try {
        return res.send(await blog_1.default.find({}));
    }
    catch (error) {
        return res.status(500).send(error);
    }
};
exports.getAllBlogs = getAllBlogs;
const createBlog = async (req, res) => {
    try {
        const { body: { title, content }, } = req;
        const newBlog = new blog_1.default({ title, content });
        await newBlog.save();
        return res.send("new blog added successfully");
    }
    catch (error) {
        return res.status(500).send(error);
    }
};
exports.createBlog = createBlog;
