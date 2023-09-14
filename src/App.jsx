import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/Components/Header/Header'

function App() {
  const [bookMarks, setBookMark] = useState([])
  const [markAsRead, setMarkAsRead]= useState(0)
  const handleBookMark = blog =>{
    const newBookMark = ([...bookMarks, blog])
    setBookMark(newBookMark)
  }
  
  const setMarkAsReadBtn = time =>{
    const sumTime = markAsRead + time;
    setMarkAsRead(sumTime);
  } 

  return (
    <>
    
   <div className='lg: max-w-screen-xl md: flex mx-auto'>
   <Header></Header>
   </div>
      <div className='lg: max-w-screen-xl md: flex mx-auto'>
      <Blogs handleBookMark={handleBookMark} setMarkAsReadBtn={setMarkAsReadBtn}></Blogs>
      <Bookmarks bookMarks={bookMarks} markAsRead={markAsRead} ></Bookmarks>
      </div>

    </>
  )
}
export default App
