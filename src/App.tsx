import './styles/reset.css'
import './styles/App.css'
import { useCallback, useEffect, useState } from 'react'
import { NotesHeader } from './ui/components/NotesHeader'
import { Main } from './ui/pages/Main'
import { SideBar } from './ui/components/SideBar'
import { sideBarIcon } from './ui/icons'
import { NoteWindow } from './ui/components/NoteWindow'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { setMobileMode, toggleSideBarOpened } from './app/features/main/mainSlice'
import { MOBILE_FROM_WIDTH } from './config/settings'



function App() {
  const dispatch = useAppDispatch()
  const { sidebarOpened, mobileMode } = useAppSelector(state => state.main)

  const optimizedHandleMobileMode = useCallback(() => {
    let calls = 0;

    return () => {
      const neededMobile = window.screen.width <= MOBILE_FROM_WIDTH
      if (!calls) {
        if (neededMobile && !mobileMode) {
          dispatch(setMobileMode(true));
          calls++;
        } else if (!neededMobile && mobileMode) {
          dispatch(setMobileMode(false));
          calls++;
        }
      }
    }
  }, [mobileMode])



  useEffect(() => {
    const handleMobileMode = optimizedHandleMobileMode()
    handleMobileMode()
    window.addEventListener("resize", handleMobileMode)
  }, [mobileMode])

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
