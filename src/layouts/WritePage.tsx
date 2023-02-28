import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [context, setContext] = useState<string>("");
  return (
    <>
      <nav>
        <span>제목</span>
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </nav>
      <nav>
        <span>내용</span>
        <textarea
          placeholder="내용을 입력해주세요."
          value={context}
          onChange={(e) => setContext(e.target.value)}
        ></textarea>
      </nav>
      <button
        onClick={() => {
          if (title === "" || context === "") {
            alert("정보를 제대로 입력해주세요.");
          } else {
            let MakingCheck: boolean = window.confirm(
              title + "\n" + context + "로 만드시겠습니까?"
            );
            if (MakingCheck) {
              navigate("/");
            }
          }
        }}
      >
        만들기
      </button>
    </>
  );
}
