import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SearchBar from './components/Header/SearchBar'

import NewPost from './components/Feed/NewPost'
function App() {

  let [user, setUser] = useState("Admin")
  const [isOpen, setIsOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  function homepage(type) {
    setUser(type)
  }

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
