import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import SearchBar from './components/Header/SearchBar'
function App() {

  let [user, setUser] = useState("student")
  function homepage(type) {
    setUser(type)
  }


  return (
    <>

      <Header />
      <SearchBar user={user} />
      <Home user={user} />


    </>
  )
}

export default App

