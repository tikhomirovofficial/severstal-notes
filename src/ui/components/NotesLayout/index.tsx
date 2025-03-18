import React from 'react'
import styles from './noteslayout.module.scss'
import { NoteCard } from '../NoteCard'


export const NotesLayout = () => {
  return (
    <div className={`${styles.layout}`}>
        <span className={`c-gray fz-s ${styles.count}`}>Всего заметок: 121</span>
        <ul className={styles.list}>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
            <li>
                <NoteCard/>
            </li>
        </ul>
    </div>
  )
}
