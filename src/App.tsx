import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";

import s from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={s.wrapper}>
      <Sidebar />
      <Post />
      </div>
    </div>
  );
}

export default App;
