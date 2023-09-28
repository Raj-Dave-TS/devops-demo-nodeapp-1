import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

export function ViewBlog() {
  const [blogs, setBlogs] = useState<any>([]);
  useEffect(() => {
    listBlog();
  }, []);
  const listBlog = async () => {
    const res = await axios.get("http://172.20.10.7:3000/blog");
    console.log(res);
    setBlogs(res.data);
  };
  return (
    blogs && (
      <div style={{ margin: "10%" }}>
        <h2>View Blog</h2>
        {blogs.map((blog: any) => {
          return (
            <div key={blog._id}>
              <Card>
                <CardBody>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardText>{blog.content}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    )
  );
}

export default ViewBlog;
