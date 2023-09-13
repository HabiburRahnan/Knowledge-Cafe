import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmaks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  const handleMarkAsRead = (time) => {
    const newRedingTime = readingTime + time;
    setReadingTime(newRedingTime);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
