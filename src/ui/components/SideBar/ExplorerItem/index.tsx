import React, { FC } from 'react'
import styles from './explorerItem.module.scss'
import { ExplorerItemProps } from './types'



export const ExplorerItem: FC<ExplorerItemProps> = () => {
    return (
        <li className={`bradius-s ${styles.item}`}>
            <div className={styles.left}>
                <span className={`fz-s`}>Заметка 1</span>
            </div>
        </li>
    )
}
