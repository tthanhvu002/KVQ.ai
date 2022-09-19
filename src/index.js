import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PoolDetail from "./pages/PoolDetail/PoolDetail";
import StartPool from "./pages/StartPool.js/StartPool";
import Lottery from "./pages/Lottery/Lottery";
import Tutorial from "./pages/Tutorial/Tutorial";
import EarnReward from "./pages/EarnReward/EarnReward";
import AboutUs from "./pages/AboutUs/AboutUs";
import MyPage from "./pages/MyPage/MyPage";
import MyPool from "./pages/MyPool/MyPool";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>

        <Route path="/mypool" element={<MyPool />}></Route>
        <Route path="/startpool" element={<StartPool />}></Route>
        <Route path="/lottery" element={<Lottery />}></Route>
        <Route path="/tutorial" element={<Tutorial />}></Route>
        <Route path="/earnreward" element={<EarnReward />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
