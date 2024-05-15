
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookMarks/Bookmarks'
import Header from './component/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    // remove mark as read bookmark
    // console.log('idddddddddddddd', id)
    const remainingBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex mx-w-7xl mx-auto gap-6'>
        <Blogs handleAddBookmarks={handleAddBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
