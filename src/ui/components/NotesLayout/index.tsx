import React from 'react'
import styles from './noteslayout.module.scss'
import { NoteCard } from '../NoteCard'
import { filterIcon } from '../../icons'
import { NoteElementMini } from '../NoteCard/mobile'
import { useAppSelector } from '../../../app/hooks'


export const NotesLayout = () => {
    const { mobileMode } = useAppSelector(state => state.main)
    return (
        <div className={`${styles.layout}`}>
            <div className={styles.top}>
                <span className={`c-gray fz-s ${styles.count}`}>Всего заметок: 121</span>
            </div>
            <ul className={styles.list}>
                {
                    Array(10).map(item => (
                        <li>
                            {mobileMode ? <NoteElementMini /> : <NoteCard />}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
