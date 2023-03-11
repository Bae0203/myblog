import PostContent from "../components/PostContent";
import { useRecoilValue } from "recoil";
import { EntriePostContent, IPostContent } from "../store/PostInformation";
import * as S from "../style/MainStyte";
function Main() {
  const entireContent = useRecoilValue<IPostContent | null>(EntriePostContent);

  return (
    <>
      <S.HeadTitle>내 글 목록들</S.HeadTitle>
      <button onClick={() => localStorage.clear()}>dd</button>
      <S.PostContentWrap>
        {entireContent?.title?.map((e, i) => {
          return (
            <PostContent
              title={e}
              context={entireContent.context[i]}
              index={i}
            ></PostContent>
          );
        })}
      </S.PostContentWrap>
    </>
  );
}

export default Main;
