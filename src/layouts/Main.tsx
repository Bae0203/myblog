import React, { useState } from "react";

interface IUseLocalstorageKey {
  key: string;
}

interface IUseLocalstorageSet {
  key: string;
  value: string;
}

const useLSGet = (props: IUseLocalstorageKey) => {
  return localStorage.getItem(props.key);
};
const useLSSet = (props: IUseLocalstorageSet) => {
  return localStorage.setItem(props.key, props.value);
};
const useLSRemove = (props: IUseLocalstorageKey) => {
  return localStorage.removeItem(props.key);
};

const useLocalStorage = (method: string) => {
  if (method === "get") {
    return useLSGet;
  } else if (method === "set") {
    return useLSSet;
  } else if (method === "remove") {
    return useLSRemove;
  }
};

function Main() {
  const useLocalStorageSet = useLocalStorage("set");
  const [value, setValue] = useState<string>("");
  const [pageCount, setPageCount] = useState<number>(0);
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          useLocalStorageSet({ key: String(pageCount), value: value });
        }}
      >
        추가
      </button>
    </>
  );
}

export default Main;
