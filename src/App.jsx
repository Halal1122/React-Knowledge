import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks'
import Header from './assets/Components/Header/Header'

function App() {

  return (
    <>
   <div className='lg: max-w-screen-xl md: flex mx-auto'>
   <Header></Header>
   </div>
      <div className='lg: max-w-screen-xl md: flex mx-auto'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
