import React, { useState } from 'react'
import styles from './sidebar.module.scss'
import { Search } from '../Search'
import logoImg from '../../../assets/logo.png'
import { addFileIcon, addFolderIcon, sideBarIcon } from '../../icons'
import { ExplorerItem } from './ExplorerItem'
import { TextButton } from '../TextButton'



export const SideBar = () => {
    const [opened, setOpened] = useState(true)
    const [visible, setVisible] = useState(true)

    const close = () => {
        setOpened(false)
        setTimeout(() => {
            setVisible(false)
        }, 150)
    }

    return (
        <aside style={{width: opened ? "100%" : 0 }} className={styles.sidebar}>
            {visible ?
                <div className={styles.sidebarWrapper}>
                    <header className={styles.header}>
                        <img src={logoImg} height={26} width={220} alt="Логотип" loading='lazy' />
                        <button type='button' onClick={close}>
                            <img src={sideBarIcon} height={18} width={25} alt="" />
                        </button>
                    </header>
                    <Search />
                    <div className={styles.explorer}>
                        <header className={styles.explorerHeader}>
                            <TextButton className={`c-blue fz-s`}>
                                <img src={addFileIcon} height={14} width={14} alt="" />
                                Новая заметка
                            </TextButton>
                        </header>
                        <div className={styles.listWrapper}>
                            <ul className={`${styles.list}`}>
                                {Array(40).fill(null).map(item => (
                                    <ExplorerItem />
                                ))}
                            </ul>
                        </div>

                    </div>
                </div> : null
            }

        </aside>
    )
}
