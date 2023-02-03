import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import DetailPage from "./layouts/DetailPage";
import Main from "./layouts/Main";
export default function Router() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
