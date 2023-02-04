import { useNavigate } from "react-router-dom";

export default function Header() {
  const Navigate = useNavigate();
  return (
    <header>
      <p onClick={() => Navigate("/")}>MyBlog</p>
      <p onClick={() => Navigate("/write")}>Write</p>
    </header>
  );
}
