import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import * as S from "../style/CusInputFileStyle";

interface IUploadImageProps {
  imageUrl: string | null;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
}

const UploadImage = (props: IUploadImageProps) => {
  const ImageOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    const reader = new FileReader();
    if (file) {
      const fileResource = file[0];
      reader.onload = () => {
        const Image = URL.createObjectURL(fileResource);
        props.setImageUrl(Image);
      };
      reader.readAsDataURL(fileResource);
    }
  };

  return (
    <>
      {props.imageUrl ? (
        <>
          <p>미리보기 이미지</p>
          <S.PreviewImage src={props.imageUrl} alt="유감" />
        </>
      ) : null}
      <input type="file" onChange={ImageOnChangeHandler} accept="image/*" />
    </>
  );
};

export default UploadImage;
