import React from 'react'
import styles from './noteWindow.module.scss'
import { NoteWindowContent } from './content'

export const NoteWindow = () => {
  return (
    <div className={`${styles.window} ${styles.windowOpened}`}>
        <NoteWindowContent/>
    </div>
  )
}
