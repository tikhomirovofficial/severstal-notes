import { unfilledFileIcon, unfilledFolderIcon } from '../../icons'
import { Search } from '../Search'
import { TextButton } from '../TextButton'
import styles from './notesHeader.module.scss'

export const NotesHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <span>👋 Добрый вечер!</span>
            </div>
            <h1 className={`title content-title`}>Все заметки</h1>
            <div className={styles.notesBar}>
                <div className={styles.buttons}>
                    <TextButton>
                        <img src={unfilledFileIcon} height={23} width={22} alt="" />
                        Создать заметку
                    </TextButton>
                    <TextButton>
                        <img src={unfilledFolderIcon} height={22} width={24} alt="" />
                        Создать папку
                    </TextButton>
                </div>
                <Search/>
            </div>
        </header>
    )
}
