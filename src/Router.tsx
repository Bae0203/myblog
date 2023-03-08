import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from "./layouts/Main";
import WritePage from "./layouts/WritePage";
export default function Router() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
