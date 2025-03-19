import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { filterIcon, unfilledFileIcon } from '../../icons'
import { Search } from '../Search'
import { TextButton } from '../TextButton'
import styles from './notesHeader.module.scss'
import logoImg from '../../../assets/logo.png'
import { addNote } from '../../../app/features/notes/notesSlice'

export const NotesHeader = () => {
    const dispatch = useAppDispatch()
    const { tabletMode } = useAppSelector(state => state.main)

    const createNote = () => {
        dispatch(addNote())
    }

    return (
        <header className={styles.header}>
            <div className={styles.top}>
                {
                    tabletMode ?
                        <img src={logoImg} width={230} height={30} alt="" /> : null
                }
                <span>👋 Добрый вечер!</span>
            </div>
            <h1 className={`title content-title`}>Все заметки</h1>
            <div className={styles.notesBar}>
                {
                    !tabletMode ?
                        <div className={styles.buttons}>
                            <TextButton onClick={createNote}>
                                <img src={unfilledFileIcon} height={18} width={18} alt="" />
                                Создать заметку
                            </TextButton>
                        </div> : null
                }

                <div className={styles.filterSearch}>
                    <div className={styles.filter}>
                        <img src={filterIcon} height={20} width={20} alt="" />
                        <span className='c-blue'>
                            Сначала старые
                        </span>
                    </div>
                    <Search />
                </div>
            </div>
        </header>
    )
}
