import React from "react";
import { useParams } from "react-router-dom";
import { EntriePostContent, IPostContent } from "../store/PostInformation";
import { useRecoilValue } from "recoil";

const DetailPage = () => {
  const { id } = useParams();
  const PostValue = useRecoilValue<IPostContent | null>(EntriePostContent);
  return (
    <>
      {PostValue && id ? (
        <>
          <div>dd</div>
          <button
            onClick={() => console.log(PostValue.title[Number(id)], Number(id))}
          >
            ddd
          </button>
          <p>제목 : {PostValue.title[Number(id)]}</p>
          <p>내용 : </p>
          <img src="" alt="image" />
        </>
      ) : (
        <p>404! 내용이 없습니다!</p>
      )}
    </>
  );
};

export default DetailPage;
