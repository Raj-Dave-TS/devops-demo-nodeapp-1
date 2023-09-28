import axios from "axios";
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://172.20.10.7:3000/blog", { title, content });
      setTitle("");
      setContent("");
      alert("Blog Adeed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ margin: "15%" }}>
      <h2>Create Blog</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Blog Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Blog Content</Label>
          <Input
            type="textarea"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateBlog;
