import React from 'react'
import styles from './noteslayout.module.scss'
import { NoteCard } from '../NoteCard'
import { filterIcon } from '../../icons'


export const NotesLayout = () => {
    return (
        <div className={`${styles.layout}`}>
            <div className={styles.top}>
                <span className={`c-gray fz-s ${styles.count}`}>Всего заметок: 121</span>
            </div>
            <ul className={styles.list}>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>
                <li>
                    <NoteCard />
                </li>

            </ul>
        </div>
    )
}
