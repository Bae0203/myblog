import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style/PostContentStyle";

interface IPostContentProps {
  title: string;
  context: string;
  index: number;
}

const PostContent = (props: IPostContentProps) => {
  const Navigate = useNavigate();
  return (
    <S.PostContentBox onClick={() => Navigate(`/detail/${props.index}`)}>
      <p>{props.title}</p>
      <p>{props.context}</p>
    </S.PostContentBox>
  );
};

export default PostContent;
