import React from "react";
import { useNavigate } from "react-router-dom";

interface IPostContentProps {
  title: string;
  context: string;
  index: number;
}

const PostContent = (props: IPostContentProps) => {
  const Navigate = useNavigate();
  return (
    <div onClick={() => Navigate(`/detail/${props.index}`)}>
      <p>{props.title}</p>
      <p>{props.context}</p>
    </div>
  );
};

export default PostContent;
