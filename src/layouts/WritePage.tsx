import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadImage from "../components/UploadImage";

const WritePage = () => {
  const Navigate = useNavigate();

  const [newTitle, setNewTitle] = useState<string>("");
  const [newContext, setNewContext] = useState<string>("");
  const [newImageUrl, setNewImageUrl] = useState<string | null>(null);

  const SaveInformationCheck = () => {
    let parseTitle: string | null = localStorage.getItem("title");
    let parseContext: string | null = localStorage.getItem("context");
    let parseImageUrl: string | null = localStorage.getItem("image");

    if (parseTitle) {
      let TitleList: string[] = JSON.parse(parseTitle);
      TitleList.push(newTitle);
      localStorage.setItem("title", JSON.stringify(TitleList));
    } else {
      let TitleList: string[] = [newTitle];
      localStorage.setItem("title", JSON.stringify(TitleList));
    }
    if (parseContext) {
      let ContextList: string[] = JSON.parse(parseContext);
      ContextList.push(newContext);
      localStorage.setItem("context", JSON.stringify(ContextList));
    } else {
      let ContextList: string[] = [newContext];
      localStorage.setItem("context", JSON.stringify(ContextList));
    }
    if (parseImageUrl) {
      if (newImageUrl != null) {
        let ImageUrlList: string[] = JSON.parse(parseImageUrl);
        ImageUrlList.push(newImageUrl);
        localStorage.setItem("image", JSON.stringify(ImageUrlList));
      }
    } else {
      if (newImageUrl != null) {
        let ImageUrlList: string[] = [newImageUrl];
        localStorage.setItem("image", JSON.stringify(ImageUrlList));
      }
    }

    alert("생성되었습니다!");
    Navigate("/");
  };

  const SaveButtonHandler = () => {
    let CheckSaveContent = window.confirm("게시물을 올리겠습니까?");
    if (CheckSaveContent) {
      if (newImageUrl == null || newTitle == null || newContext == null) {
        alert("정보를 제대로 입력해주세요");
        return;
      } else {
        SaveInformationCheck();
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
