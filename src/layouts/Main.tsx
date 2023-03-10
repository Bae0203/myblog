import { useEffect } from "react";
import PostContent from "../components/PostContent";
import { useRecoilValue } from "recoil";
import { EntriePostContent, IPostContent } from "../store/PostInformation";

function Main() {
  const entireContent = useRecoilValue<IPostContent | null>(EntriePostContent);

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
