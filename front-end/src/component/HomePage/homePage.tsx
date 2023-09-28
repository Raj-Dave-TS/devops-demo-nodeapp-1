import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginLeft: "20%" }}>
        <Button onClick={() => navigate("/create-blog")}>Create Blog</Button>
        <Button
          onClick={() => navigate("/view-blog")}
          style={{ margin: "10%" }}
        >
          View Blog
        </Button>
      </div>
    </>
  );
}
