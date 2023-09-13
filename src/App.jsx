import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/Components/Header/Header'

function App() {
  const [bookMark, setBookMark] = useState([])
  const handleBookMark = blog =>{
    console.log('add bookmark soon')
  }
  return (
    <>
    
   <div className='lg: max-w-screen-xl md: flex mx-auto'>
   <Header></Header>
   </div>
      <div className='lg: max-w-screen-xl md: flex mx-auto'>
      <Blogs handleBookMark={handleBookMark}></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
