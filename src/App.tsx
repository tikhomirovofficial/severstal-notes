import './styles/reset.css'
import './styles/App.css'
import { useState } from 'react'
import { NotesHeader } from './ui/components/NotesHeader'
import { Main } from './ui/pages/Main'
import { SideBar } from './ui/components/SideBar'
import { sideBarIcon } from './ui/icons'
import { NoteWindow } from './ui/components/NoteWindow'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { toggleSideBarOpened } from './app/features/main/mainSlice'



function App() {
  const dispatch = useAppDispatch()
  const { sidebarOpened } = useAppSelector(state => state.main)

  const openSideBar = () => dispatch(toggleSideBarOpened())

  return (
    <>
      <SideBar opened={sidebarOpened} />
      <section className='content'>
        <NoteWindow />
        {
          !sidebarOpened ?
            <button onClick={openSideBar} type='button' className='content-sidebar-button'>
              <img src={sideBarIcon} height={22} width={22} alt="" />
            </button>
            : null
        }
        <NotesHeader />
        <Main />
      </section>

    </>
  )
}

export default App
