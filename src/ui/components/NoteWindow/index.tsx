import React from 'react'
import styles from './noteWindow.module.scss'
import { NoteWindowContent } from './content'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

export const NoteWindow = () => {
    const { noteOpened } = useAppSelector(state => state.notes)
    return (
        <div className={`${styles.window} ${noteOpened ? styles.windowOpened : ""}`}>
            {noteOpened ? <NoteWindowContent /> : null}
        </div>
    )
}
