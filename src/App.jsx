import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmaks";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
