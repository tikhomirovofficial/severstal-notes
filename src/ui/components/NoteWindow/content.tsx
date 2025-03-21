import styles from './noteWindow.module.scss'
import { refreshIcon, categoryIcon, arrowLeftIcon } from '../../icons'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { TextButton } from '../TextButton'
import { deleteNote, editNote, resetCurrentNoteData, toggleWindowOpened } from '../../../app/features/notes/notesSlice'
import { useEffect, useState } from 'react'

export const NoteWindowContent = () => {
    const dispatch = useAppDispatch()

    const { currentNoteData } = useAppSelector(state => state.notes)
    const [noteName, setNoteName] = useState(currentNoteData.name)
    const [noteContent, setNoteContent] = useState(currentNoteData.content)

    const editThisNoteName = () => {
        dispatch(editNote({
            id: currentNoteData.id,
            key: "name",
            value: noteName
        }))
    }

    const editThisNoteContent = () => {
        dispatch(editNote({
            id: currentNoteData.id,
            key: "content",
            value: noteContent
        }))
    }

    const closeWindow = () => {
        dispatch(toggleWindowOpened())
        dispatch(resetCurrentNoteData())
    }

    const deleteThisNote = () => {
        closeWindow()
        dispatch(deleteNote(currentNoteData.id))
    }

    useEffect(() => {
        setNoteName(currentNoteData.name)
    }, [currentNoteData.name])

    return (
        <section className={styles.content}>
            <header className={styles.header}>
                <button onClick={closeWindow} className={`c-blue fz-l ${styles.back}`}>
                    <img src={arrowLeftIcon} alt="" />
                    <span>Назад к заметкам</span>
                </button>
                <input
                    type="text"
                    className={`title ${styles.title}`}
                    value={noteName}
                    onChange={e => setNoteName(e.target.value)}
                    onBlur={currentNoteData.name !== noteName ? editThisNoteName : undefined}
                    onClick={e => e.stopPropagation()} />
                <div className={`c-blue ${styles.info}`}>
                    <div title={`Последнее обновление ${currentNoteData.updated_date}`} className={styles.item}>
                        <img src={refreshIcon} height={18} width={18} alt="" />
                        <span className='fz-m'>{currentNoteData.updated_date}</span>
                    </div>
                    <div className={styles.item}>
                        <img src={categoryIcon} height={18} width={17} alt="" />
                        <span className='fz-m'>Символов: {noteContent.length}</span>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={`c-gray ${styles.created}`}>Создано: 15.03.2025</span>
                    <button onClick={deleteThisNote} type='button' className={styles.item}>
                        <TextButton className={styles.delete}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.3571 10.8317L1.33335 3.66666H10.6667L9.64294 10.8317C9.6032 11.1097 9.46452 11.3641 9.25235 11.5481C9.04018 11.7321 8.76877 11.8333 8.48794 11.8333H3.5121C3.23127 11.8333 2.95986 11.7321 2.74769 11.5481C2.53552 11.3641 2.39684 11.1097 2.3571 10.8317ZM11.25 1.33332H8.33335V0.74999C8.33335 0.59528 8.2719 0.446907 8.1625 0.337511C8.0531 0.228115 7.90473 0.166656 7.75002 0.166656H4.25002C4.09531 0.166656 3.94694 0.228115 3.83754 0.337511C3.72815 0.446907 3.66669 0.59528 3.66669 0.74999V1.33332H0.75002C0.595311 1.33332 0.446938 1.39478 0.337541 1.50418C0.228145 1.61357 0.166687 1.76195 0.166687 1.91666C0.166687 2.07137 0.228145 2.21974 0.337541 2.32914C0.446938 2.43853 0.595311 2.49999 0.75002 2.49999H11.25C11.4047 2.49999 11.5531 2.43853 11.6625 2.32914C11.7719 2.21974 11.8334 2.07137 11.8334 1.91666C11.8334 1.76195 11.7719 1.61357 11.6625 1.50418C11.5531 1.39478 11.4047 1.33332 11.25 1.33332Z" fill="#D2D2D2" />
                            </svg>
                            <span className='fz-m'>Удалить заметку</span>
                        </TextButton>
                    </button >
                </div>
            </header>
            <div className={styles.noteWrapper}>
                <textarea
                    value={noteContent}
                    onChange={e => setNoteContent(e.target.value)}
                    onBlur={currentNoteData.content !== noteContent ? editThisNoteContent : undefined}
                    className='fz-l'
                    placeholder='Напишите что-нибудь...' />
            </div>
        </section>
    )
}
