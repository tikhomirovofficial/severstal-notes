import { FC } from 'react'
import styles from './noteCard.module.scss'
import { closeIcon, unfilledFileIcon } from '../../icons'
import { NoteElementMiniProps } from './types'
import { useAppDispatch } from '../../../app/hooks'
import { deleteNote, setCurrentNoteData, toggleWindowOpened } from '../../../app/features/notes/notesSlice'


export const NoteElementMini: FC<NoteElementMiniProps> = (props) => {
    const dispatch = useAppDispatch()

    const openNoteWindow = () => {
        dispatch(toggleWindowOpened())
        dispatch(setCurrentNoteData(props.id))
    }

    const deleteThisNote = () => dispatch(deleteNote(props.id))

    return (
        <div key={props.id} onClick={openNoteWindow} className={`fz-m c-blue bradius-s ${styles.elementMini}`}>
            <div className={styles.left}>
                <img src={unfilledFileIcon} height={2} width={22} alt="" />
                <input readOnly type="text" className={`fz-m c-blue`} value={props.name} />
            </div>
            <button onClick={deleteThisNote} type="button" className={styles.delete}>
                <img height={18} width={18} src={closeIcon} alt="" />
            </button>
        </div>
    )
}
