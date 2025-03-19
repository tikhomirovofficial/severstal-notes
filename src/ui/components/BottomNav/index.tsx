import React from 'react'
import styles from './bottomNav.module.scss'
import { addFileIcon } from '../../icons'
import { TextButton } from '../TextButton'

export const BottomNav = () => {
    return (
        <div className={styles.bottomNav}>
            <TextButton className={`c-blue fz-l`}>
                <img src={addFileIcon} height={19} width={19} alt="" />
                Новая заметка
            </TextButton>
        </div>
    )
}
