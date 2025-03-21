import styles from './noteslayout.module.scss'
import { NoteCard } from '../NoteCard'
import { NoteElementMini } from '../NoteCard/mobile'
import { useAppSelector } from '../../../app/hooks'
import { cryingSmileIcon } from '../../icons'

export const NotesLayout = () => {
    const { mobileMode } = useAppSelector(state => state.main)
    const { items } = useAppSelector(state => state.notes)
    const { main_search_val } = useAppSelector(state => state.search)

    const lowerMainSearch = main_search_val.toLowerCase()
    const searchedNotes = items.filter(note => note.name.toLowerCase().includes(lowerMainSearch))

    return (
        <div className={`${styles.layout}`}>
            <div className={styles.top}>
                <span className={`c-gray fz-s ${styles.count}`}>{lowerMainSearch ? `По запросу '${main_search_val}' найдено` : "Найдено"} заметок: {searchedNotes.length}</span>
            </div>
            {
                !searchedNotes.length ?
                    <div className={styles.empty}>
                        <img src={cryingSmileIcon} height={60} width={60} alt="" />
                        <span>К сожалению, заметок не найдено</span>
                    </div> :
                    <ul className={styles.list}>
                        {
                            searchedNotes.map(note => (
                                <li key={note.id}>
                                    {mobileMode ? <NoteElementMini {...note} /> : <NoteCard {...note} content_length={note.content.length} />}
                                </li>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}
