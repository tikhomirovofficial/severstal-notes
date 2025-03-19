import React, { FC } from 'react'
import styles from './explorerItem.module.scss'
import { ExplorerItemProps } from './types'
import { closeIcon } from '../../../icons'



export const ExplorerItem: FC<ExplorerItemProps> = () => {
    return (
        <li className={`bradius-s ${styles.item}`}>
            <input type="text" className='fz-s' value={"Без названия"}/>
            <button type="button" className={styles.delete}>
                <img height={18} width={18} src={closeIcon} alt="" />
            </button>
        </li>
    )
}
