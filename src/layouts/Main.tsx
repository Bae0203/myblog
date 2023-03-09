import { useEffect, useState } from "react";
import PostContent from "../components/PostContent";

function Main() {
  const [titleList, setTitleList] = useState<string[]>([]);
  const [contextList, setContextList] = useState<string[]>([]);
  const [imageUrlList, setImageUrlList] = useState<string[]>([]);

  useEffect(() => {
    let parseTitle: string | null = localStorage.getItem("title");
    let parseContext: string | null = localStorage.getItem("context");
    let parseImageUrl: string | null = localStorage.getItem("image");
    if (parseTitle) {
      const TitleList: string[] = JSON.parse(parseTitle);
      setTitleList([...TitleList.reverse()]);
    }
    if (parseContext) {
      const ContextList: string[] = JSON.parse(parseContext);
      setContextList([...ContextList.reverse()]);
    }
    if (parseImageUrl) {
      const ImageUrlList: string[] = JSON.parse(parseImageUrl);
      setImageUrlList([...ImageUrlList.reverse()]);
    }
  }, []);

  return (
    <>
      <p>내 글 목록들</p>
      <button onClick={() => localStorage.clear()}>dd</button>
      {titleList.map((e, i) => {
        return (
          <PostContent
            title={e}
            context={contextList[i]}
            index={i}
          ></PostContent>
        );
      })}
    </>
  );
}

export default Main;
