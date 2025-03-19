import { FC, useState, MouseEvent, useEffect } from 'react'
import styles from './explorerItem.module.scss'
import { ExplorerItemProps } from './types'
import { arrowSquareIcon, closeIcon } from '../../../icons'
import { editNote, deleteNote, toggleWindowOpened, setCurrentNoteData } from '../../../../app/features/notes/notesSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

export const ExplorerItem: FC<ExplorerItemProps> = (props) => {
    const dispatch = useAppDispatch()
    const { noteOpened } = useAppSelector(state => state.notes)
    const [noteName, setNoteName] = useState(props.name)

    const openNoteWindow = () => {
        if (!noteOpened) dispatch(toggleWindowOpened())
        dispatch(setCurrentNoteData(props.id))
    }

    const editThisNoteName = () => {
        dispatch(editNote({
            id: props.id,
            key: "name",
            value: noteName
        }))
    }

    const deleteThisNote = (e: MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        dispatch(deleteNote(props.id))
    }

    useEffect(() => {
        setNoteName(props.name)
    }, [props.name])

    return (
        <li onDoubleClick={openNoteWindow} className={`bradius-s ${styles.item}`}>
            <input
                type="text"
                className='fz-s'
                value={noteName}
                onChange={e => setNoteName(e.target.value)}
                onBlur={editThisNoteName}
            />
            <div className={styles.btns}>
                <button onClick={openNoteWindow} type="button" className={`${styles.btn}`}>
                    <img height={20} width={20} src={arrowSquareIcon} alt="" />
                </button>
                <button onClick={deleteThisNote} type="button" className={`${styles.btn} ${styles.delete}`}>
                    <img height={18} width={18} src={closeIcon} alt="" />
                </button>
            </div>
        </li>
    )
}
