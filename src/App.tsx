import './styles/reset.css'
import './styles/App.css'
import { useCallback, useEffect, useState } from 'react'
import { NotesHeader } from './ui/components/NotesHeader'
import { Main } from './ui/pages/Main'
import { SideBar } from './ui/components/SideBar'
import { sideBarIcon } from './ui/icons'
import { NoteWindow } from './ui/components/NoteWindow'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { setMobileMode, setTabletMode, toggleSideBarOpened } from './app/features/main/mainSlice'
import { MOBILE_START_WIDTH, TABLET_START_WIDTH } from './config/settings'
import { BottomNav } from './ui/components/BottomNav'



function App() {
  const dispatch = useAppDispatch()
  const { sidebarOpened, mobileMode, tabletMode } = useAppSelector(state => state.main)



  const optimizedHandleMobileMode = useCallback(() => {
    let calls = 0;

    return () => {
      const neededTablet = window.screen.width <= TABLET_START_WIDTH
      const neededMobile = window.screen.width <= MOBILE_START_WIDTH

      if (!calls) {
        if (neededTablet && !tabletMode) {
          dispatch(setTabletMode(true));
          calls++;
        } else if (!neededTablet && tabletMode) {
          dispatch(setTabletMode(false));
          calls++;
        }
        if (neededMobile && !mobileMode) {
          dispatch(setMobileMode(true));
          calls++;
        } else if (!neededMobile && mobileMode) {
          dispatch(setMobileMode(false));
          calls++;
        }
      }
    }
  }, [tabletMode, mobileMode])



  useEffect(() => {
    const handleMobileMode = optimizedHandleMobileMode()
    handleMobileMode()
    window.addEventListener("resize", handleMobileMode)
  }, [mobileMode, tabletMode])

  const openSideBar = () => dispatch(toggleSideBarOpened())

  return (
    <>
      {!tabletMode ? <SideBar opened={sidebarOpened} /> : null}
      <section className='content'>
        <NoteWindow />
        {
          !sidebarOpened && !tabletMode ?
            <button onClick={openSideBar} type='button' className='content-sidebar-button'>
              <img src={sideBarIcon} height={22} width={22} alt="" />
            </button>
            : null
        }
        <NotesHeader />
        <Main />
        {tabletMode ? <BottomNav /> : null}

      </section>

    </>
  )
}

export default App
