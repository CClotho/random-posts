import { useState } from 'react'
import MagazineLayout from './components/MagazineLayout'
import './styles/app.scss';
import Post from './components/Posts';
import PostList from './components/PostList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MagazineLayout/>
     <PostList />
     
       
    </>
  )
}

export default App
