import './styles/reset.css'
import './styles/App.css'
import { useState } from 'react'
import { NotesHeader } from './ui/components/NotesHeader'
import { Main } from './ui/pages/Main'
import { SideBar } from './ui/components/SideBar'



function App() {

  return (
    <>
      <SideBar/>
      <section className='content'>
        <NotesHeader />
        <Main />
      </section>

    </>
  )
}

export default App
