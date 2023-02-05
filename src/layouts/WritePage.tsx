import { useRef, useState, useMemo } from "react";
import BlankImg from "../asset/person.png";

type UploadImage = {
  file: File;
  thumbnail: string;
  type: string;
};

export default function WritePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<UploadImage | null>(null);
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImg({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
      console.log("d", url);
    }
  };

  const showImage = useMemo(() => {
    if (!img && img == null) {
      return <img src={BlankImg} alt="사진이 비어있습니다." />;
    }
    return (
      <img
        src={img.thumbnail}
        alt={img.type}
        onClick={handleClickFileInput}
      ></img>
    );
  }, [img]);

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
      {showImage}
      <form>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={uploadFile}
        />
        <input type="button" onClick={handleClickFileInput} />
      </form>
    </>
  );
}
