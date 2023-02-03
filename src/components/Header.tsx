import { useNavigate } from "react-router-dom";

export default function Header() {
  const Navigate = useNavigate();
  return (
    <header onClick={() => Navigate("/")}>
      <p>MyBlog</p>
      <p>Write</p>
    </header>
  );
}
