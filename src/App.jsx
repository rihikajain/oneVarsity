import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SearchBar from './components/Header/SearchBar'
import PostInput from './components/Feed/PostInput'
import NewPost from './components/Feed/NewPost'
function App() {

  let [user, setUser] = useState("Admin")
  function homepage(type) {
    setUser(type)
  }

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header />
      <SearchBar user={user} />
      <Home user={user} openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && <NewPost onClose={() => setOpenModal(false)} />}
    </>
  )
}
export default App
