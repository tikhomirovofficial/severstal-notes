import './styles/reset.css'
import './styles/App.css'
import { useState } from 'react'
import { NotesHeader } from './ui/components/NotesHeader'
import { Main } from './ui/pages/Main'
import { SideBar } from './ui/components/SideBar'
import { sideBarIcon } from './ui/icons'
import { NoteWindow } from './ui/components/NoteWindow'



function App() {

  return (
    <>
      <SideBar />
      <section className='content'>
        <NoteWindow/>
        <button type='button' className='content-sidebar-button'>
          <img src={sideBarIcon} height={22} width={22} alt="" />
        </button>
        <NotesHeader />
        <Main />
      </section>

    </>
  )
}

export default App
