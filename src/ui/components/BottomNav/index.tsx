import styles from './bottomNav.module.scss'
import { addFileIcon } from '../../icons'
import { TextButton } from '../TextButton'
import { useAppDispatch } from '../../../app/hooks'
import { addNote } from '../../../app/features/notes/notesSlice'

export const BottomNav = () => {
    const dispatch = useAppDispatch()
    const createNote = () => dispatch(addNote())

    return (
        <div className={styles.bottomNav}>
            <TextButton onClick={createNote} className={`c-blue fz-l`}>
                <img src={addFileIcon} height={19} width={19} alt="" />
                Новая заметка
            </TextButton>
        </div>
    )
}
