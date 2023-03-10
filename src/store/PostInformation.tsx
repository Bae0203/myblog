import { atom } from "recoil";

export interface IPostContent {
  title: string[];
  context: string[];
  imageUrl: string[];
}

export const EntriePostContent = atom<IPostContent | null>({
  key: "PostContent",
  default: { title: [], context: [], imageUrl: [] },
});
