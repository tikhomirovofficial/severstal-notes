import React from 'react'
import styles from './noteWindow.module.scss'
import { NoteWindowContent } from './content'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

export const NoteWindow = () => {
    const { windowOpened } = useAppSelector(state => state.currentNote)
    return (
        <div className={`${styles.window} ${windowOpened ? styles.windowOpened : ""}`}>
            {windowOpened ? <NoteWindowContent /> : null}
        </div>
    )
}
