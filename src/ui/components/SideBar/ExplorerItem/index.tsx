import { FC, useState, MouseEvent } from 'react'
import styles from './explorerItem.module.scss'
import { ExplorerItemProps } from './types'
import { closeIcon } from '../../../icons'
import { editNote, deleteNote, toggleWindowOpened, setCurrentNoteData } from '../../../../app/features/notes/notesSlice'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { Note } from '../../../../types/entities'

export const ExplorerItem: FC<ExplorerItemProps> = (props) => {
    const dispatch = useAppDispatch()
    const { noteOpened, items } = useAppSelector(state => state.notes)
    const [noteName, setNoteName] = useState(props.name)

    const openNoteWindow = () => {
        if (!noteOpened) dispatch(toggleWindowOpened())
        const findedNote = items.find(item => item.id === props.id) as Note
        setCurrentNoteData(findedNote)
    }

    const editThisNoteName = () => {
        console.log(noteName, props.name)
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

    return (
        <li onClick={openNoteWindow} className={`bradius-s ${styles.item}`}>
            <input
                type="text"
                className='fz-s'
                value={noteName}
                onChange={e => setNoteName(e.target.value)}
                onBlur={editThisNoteName}
                onClick={e => e.stopPropagation()}
            />
            <button onClick={deleteThisNote} type="button" className={styles.delete}>
                <img height={18} width={18} src={closeIcon} alt="" />
            </button>
        </li>
    )
}
