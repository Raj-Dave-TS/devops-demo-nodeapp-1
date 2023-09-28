import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/homePage";
import CreateBlog from "../Blog/createBlog";
import ViewBlog from "../Blog/viewBlog";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-blog" element={<CreateBlog />} />
      <Route path="/view-blog" element={<ViewBlog />} />
    </Routes>
  );
}
