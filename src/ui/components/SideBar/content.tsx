import styles from './sidebar.module.scss'
import { Search } from '../Search'
import logoImg from '../../../assets/logo.png'
import { addFileIcon, sideBarIcon } from '../../icons'
import { ExplorerItem } from './ExplorerItem'
import { TextButton } from '../TextButton'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { toggleSideBarOpened } from '../../../app/features/main/mainSlice'
import { addNote } from '../../../app/features/notes/notesSlice'
import { setSidebarSearchValue } from '../../../app/features/search/searchSlice'

export const SideBarContent = () => {
    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.notes)
    const { sidebar_search_val } = useAppSelector(state => state.search)

    const lowerSideBarSearch = sidebar_search_val.toLowerCase()
    const searchedNotes = items.filter(note => note.name.toLocaleLowerCase().includes(lowerSideBarSearch))

    const createNote = () => {
        dispatch(addNote())
    }

    const closeSideBar = () => dispatch(toggleSideBarOpened())

    return (
        <div className={styles.sidebarWrapper}>
            <header className={styles.header}>
                <img src={logoImg} height={26} width={220} alt="Логотип" loading='lazy' />
                <button type='button' onClick={closeSideBar}>
                    <img src={sideBarIcon} height={18} width={25} alt="" />
                </button>
            </header>
            <Search value={sidebar_search_val} onChange={e => dispatch(setSidebarSearchValue(e.target.value))} />
            <div className={styles.explorer}>
                <header className={styles.explorerHeader}>
                    <TextButton onClick={createNote} className={`c-blue fz-s`}>
                        <img src={addFileIcon} height={14} width={14} alt="" />
                        Новая заметка
                    </TextButton>
                </header>
                <div className={styles.listWrapper}>
                    {!searchedNotes.length ?
                        <span className='fz-s c-gray'>Ничего не найдено...</span> :
                        <ul className={`${styles.list}`}>
                            {searchedNotes.map(item => (
                                <ExplorerItem key={item.id} {...item} />
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

