import { useEffect, useState } from "react";
import PostBox from "../components/PostBox";

interface IContent {
  title: string;
  context: string;
}

function Main() {
  const [content, setContent] = useState<IContent[] | null>();
  useEffect(() => {
    const TitleList: string | null = localStorage.getItem("title");
    const ContextList: string | null = localStorage.getItem("context");
    if (TitleList != null && ContextList != null) {
      let ParseTitleList: string[] = JSON.parse(TitleList);
      let ParseContextList: string[] = JSON.parse(ContextList);
      ParseTitleList.map((value, index) => {
        let CombineContent: IContent = {
          title: value,
          context: ParseContextList[index],
        };
      });
    }
  }, []);
  return (
    <>
      <PostBox></PostBox>
    </>
  );
}

export default Main;
