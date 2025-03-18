import React, { useState } from 'react'
import styles from './sidebar.module.scss'
import { Search } from '../Search'
import logoImg from '../../../assets/logo.png'
import { addFileIcon, addFolderIcon, sideBarIcon } from '../../icons'
import { ExplorerItem } from './ExplorerItem'



export const SideBar = () => {
    const [opened, setOpened] = useState(true)
    return (
        <aside style={{ width: opened ? "100%" : 0 }} className={styles.sidebar}>
            <header className={styles.header}>
                <img src={logoImg} height={26} width={220} alt="Логотип" loading='lazy' />
                <button type='button' onClick={() => setOpened(prev => !prev)}>
                    <img src={sideBarIcon} height={18} width={25} alt="" />
                </button>
            </header>
            <Search />
            <div className={styles.explorer}>
                <header className={styles.explorerHeader}>
                    <button type="button">
                        <img src={addFileIcon} height={18} width={18} alt="" />

                    </button>
                </header>
                <div className={styles.listWrapper}>
                    <ul className={`${styles.list}`}>
                        {Array(30).fill(null).map(item => (
                            <ExplorerItem />
                        ))}
                    </ul>
                </div>

            </div>
        </aside>
    )
}
