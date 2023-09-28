// Dada Ki Jay Ho

import { model, Schema } from "mongoose";

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const Blog = model("blog", BlogSchema);

export default Blog;
