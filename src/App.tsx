import './styles/reset.css'
import './styles/App.css'
import { useState } from 'react'
import { NotesHeader } from './ui/components/NotesHeader'
import { Main } from './ui/pages/Main'



function App() {
  const [opened, setOpened] = useState(true)


  return (
    <>
      <aside style={{ width: opened ? "100%" : 0 }} className='sidebar'>

      </aside>
      <section className='content'>
        <NotesHeader />
        <Main />
      </section>

    </>
  )
}

export default App
