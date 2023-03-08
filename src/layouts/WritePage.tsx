import React, { useState } from "react";
import UploadImage from "../components/UploadImage";

const WritePage = () => {
  const [newImageUrl, setNewImageUrl] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newContext, setNewContext] = useState<string>("");

  const SaveButtonHandler = () => {
    let CheckSaveContent = window.confirm("게시물을 올리겠습니까?");
    if (CheckSaveContent) {
      if (newImageUrl == null || newTitle == null || newContext == null) {
        alert("정보를 제대로 입력해주세요");
        return;
      }
    }
  };

  return (
    <>
      <p>글 생성</p>
      <nav>
        <p>제목</p>
        <input
          type="text"
          placeholder="제목"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
      </nav>
      <nav>
        <p>내용</p>
        <textarea
          placeholder="내용"
          value={newContext}
          onChange={(event) => setNewContext(event.target.value)}
        />
      </nav>
      <nav>
        <p>사진 업로드</p>
        <p>3:4 사이즈를 권장합니다.</p>
        <UploadImage
          imageUrl={newImageUrl}
          setImageUrl={setNewImageUrl}
        ></UploadImage>
      </nav>

      <button onClick={SaveButtonHandler}>글 올리기</button>
    </>
  );
};

export default WritePage;
