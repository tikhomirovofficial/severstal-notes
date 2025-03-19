import styles from './noteslayout.module.scss'
import { NoteCard } from '../NoteCard'
import { NoteElementMini } from '../NoteCard/mobile'
import { useAppSelector } from '../../../app/hooks'


export const NotesLayout = () => {
    const { mobileMode } = useAppSelector(state => state.main)
    const { items } = useAppSelector(state => state.notes)

    return (
        <div className={`${styles.layout}`}>
            <div className={styles.top}>
                <span className={`c-gray fz-s ${styles.count}`}>Всего заметок: {items.length}</span>
            </div>
            <ul className={styles.list}>
                {
                    items.map(note => (
                        <li key={note.id}>
                            {mobileMode ? <NoteElementMini {...note} /> : <NoteCard {...note} />}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
