import styles from './sidebar.module.scss'
import { Search } from '../Search'
import logoImg from '../../../assets/logo.png'
import { addFileIcon, sideBarIcon } from '../../icons'
import { ExplorerItem } from './ExplorerItem'
import { TextButton } from '../TextButton'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { toggleSideBarOpened } from '../../../app/features/main/mainSlice'
import { addNote } from '../../../app/features/notes/notesSlice'

export const SideBarContent = () => {
    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.notes)

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
            <Search />
            <div className={styles.explorer}>
                <header className={styles.explorerHeader}>
                    <TextButton onClick={createNote} className={`c-blue fz-s`}>
                        <img src={addFileIcon} height={14} width={14} alt="" />
                        Новая заметка
                    </TextButton>
                </header>
                <div className={styles.listWrapper}>
                    <ul className={`${styles.list}`}>
                        {items.map(item => (
                            <ExplorerItem key={item.id} {...item} />
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

