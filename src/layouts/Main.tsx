import { useEffect, useState } from "react";
import PostContent from "../components/PostContent";
import { useRecoilState } from "recoil";
import { EntriePostContent, IPostContent } from "../store/PostInformation";

function Main() {
  const [entireContent, setEntireContent] = useRecoilState<IPostContent | null>(
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
    <>
      <p>내 글 목록들</p>
      <button onClick={() => localStorage.clear()}>dd</button>
      {entireContent?.title?.map((e, i) => {
        return (
          <PostContent
            title={e}
            context={entireContent.context[i]}
            index={i}
          ></PostContent>
        );
      })}
    </>
  );
}

export default Main;
