import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { params } = useParams();
  return (
    <>
      <div>dd</div>
      <p>제목 : </p>
      <p>내용 : </p>
      <img src="" alt="image" />
    </>
  );
};

export default DetailPage;
