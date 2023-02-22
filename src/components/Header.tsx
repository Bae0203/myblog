import { useNavigate } from "react-router-dom";
import * as S from "../style/HeaderStyle";

export default function Header() {
  const Navigate = useNavigate();
  return (
    <S.Header>
      <S.MainTitle onClick={() => Navigate("/")}>MyBlog</S.MainTitle>
      <S.Content onClick={() => Navigate("/write")}>Write</S.Content>
    </S.Header>
  );
}
