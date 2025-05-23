import { FC, MouseEvent, useEffect, useState } from 'react'
import styles from './noteCard.module.scss'
import { categoryIcon, copyIcon, refreshIcon } from '../../icons'
import { useAppDispatch } from '../../../app/hooks'
import { NoteCardProps } from './types'
import { copyNote, deleteNote, editNote, setCurrentNoteData, toggleWindowOpened } from '../../../app/features/notes/notesSlice'

export const NoteCard: FC<NoteCardProps> = (props) => {
    const dispatch = useAppDispatch()
    const [noteName, setNoteName] = useState(props.name)

    const openNoteWindow = () => {
        dispatch(toggleWindowOpened())
        dispatch(setCurrentNoteData(props.id))
    }

    const editThisNoteName = () => {
        dispatch(editNote({
            id: props.id,
            key: "name",
            value: noteName
        }))
    }

    const copyThisNote = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        dispatch(copyNote(props.id))
    }

    const deleteThisNote = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        dispatch(deleteNote(props.id))
    }

    useEffect(() => {
        setNoteName(props.name)
    }, [props.name])

    return (
        <article onClick={openNoteWindow} className={`bradius-l ${styles.card}`}>
            <input
                value={noteName}
                onChange={e => setNoteName(e.target.value)}
                onBlur={props.name !== noteName ? editThisNoteName : undefined}
                onClick={e => e.stopPropagation()}
                className={`fz-xl ${styles.name}`}
            />
            <div className={`c-blue ${styles.info}`}>
                <div title={`Последнее изменение ${props.updated_date}`} className={styles.item}>
                    <img src={refreshIcon} height={16} width={16} alt="" />
                    <span className='fz-s'>{props.updated_date}</span>
                </div>
                <div className={styles.item}>
                    <img src={categoryIcon} height={16} width={15} alt="" />
                    <span className='fz-s'>Символов: {props.content_length.toString()}</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomInfo}>
                    <span className={`c-gray ${styles.created}`}>Создано: {props.created_date}</span>
                    <button onClick={deleteThisNote} type="button" className={styles.delete}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.3571 10.8317L1.33335 3.66666H10.6667L9.64294 10.8317C9.6032 11.1097 9.46452 11.3641 9.25235 11.5481C9.04018 11.7321 8.76877 11.8333 8.48794 11.8333H3.5121C3.23127 11.8333 2.95986 11.7321 2.74769 11.5481C2.53552 11.3641 2.39684 11.1097 2.3571 10.8317ZM11.25 1.33332H8.33335V0.74999C8.33335 0.59528 8.2719 0.446907 8.1625 0.337511C8.0531 0.228115 7.90473 0.166656 7.75002 0.166656H4.25002C4.09531 0.166656 3.94694 0.228115 3.83754 0.337511C3.72815 0.446907 3.66669 0.59528 3.66669 0.74999V1.33332H0.75002C0.595311 1.33332 0.446938 1.39478 0.337541 1.50418C0.228145 1.61357 0.166687 1.76195 0.166687 1.91666C0.166687 2.07137 0.228145 2.21974 0.337541 2.32914C0.446938 2.43853 0.595311 2.49999 0.75002 2.49999H11.25C11.4047 2.49999 11.5531 2.43853 11.6625 2.32914C11.7719 2.21974 11.8334 2.07137 11.8334 1.91666C11.8334 1.76195 11.7719 1.61357 11.6625 1.50418C11.5531 1.39478 11.4047 1.33332 11.25 1.33332Z" fill="#D2D2D2" />
                        </svg>
                    </button>
                </div>
                <button onClick={copyThisNote} type="button" className={`${styles.copyBtn}`}>
                    <img src={copyIcon} height={16} width={16} alt="" />
                </button>
            </div>
        </article>
    )
}
