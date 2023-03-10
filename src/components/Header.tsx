import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EntriePostContent, IPostContent } from "../store/PostInformation";
import { useSetRecoilState } from "recoil";
import * as S from "../style/HeaderStyle";

export default function Header() {
  const Navigate = useNavigate();

  const setEntireContent = useSetRecoilState<IPostContent | null>(
    EntriePostContent
  );
  useEffect(() => {
    let parseTitle: string | null = localStorage.getItem("title");
    let parseContext: string | null = localStorage.getItem("context");
    let parseImageUrl: string | null = localStorage.getItem("image");
    if (parseTitle && parseContext && parseImageUrl) {
      const TitleList: string[] = JSON.parse(parseTitle);
      TitleList.reverse();
      const ContextList: string[] = JSON.parse(parseContext);
      ContextList.reverse();
      const ImageUrlList: string[] = JSON.parse(parseImageUrl);
      ImageUrlList.reverse();

      let CopyContent: IPostContent = {
        title: TitleList,
        context: ContextList,
        imageUrl: ImageUrlList,
      };
      setEntireContent({ ...CopyContent });
    }
  }, []);
  return (
    <S.Header>
      <S.MainTitle onClick={() => Navigate("/")}>MyBlog</S.MainTitle>
      <S.Content onClick={() => Navigate("/write")}>Write</S.Content>
    </S.Header>
  );
}
