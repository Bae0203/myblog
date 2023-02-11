export default function WritePage() {
  return (
    <>
      <nav>
        <label>제목</label>
        <input type="text" placeholder="제목을 입력해주세요." />
      </nav>
      <nav>
        <label>내용</label>
        <textarea placeholder="내용을 입력해주세요."></textarea>
      </nav>
      <button
        onClick={() => {
          alert("만드시겠습니까?");
        }}
      >
        만들기
      </button>
    </>
  );
}
