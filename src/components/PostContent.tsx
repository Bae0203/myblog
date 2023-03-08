import React from "react";

interface IPostContentProps {
  title: string;
  context: string;
}

const PostContent = (props: IPostContentProps) => {
  return (
    <>
      <p>{props.title}</p>
      <p>{props.context}</p>
    </>
  );
};

export default PostContent;
