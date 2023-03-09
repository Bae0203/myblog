import { atom } from "recoil";

interface IPostContent {
  title: string[];
  context: string[];
  imageUrl: string[];
}

export const PostContent = atom<IPostContent | null>({
  key: "PostContent",
  default: null,
});
