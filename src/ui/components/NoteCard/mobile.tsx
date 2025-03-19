import React from 'react'
import styles from './noteCard.module.scss'
import { TextButton } from '../TextButton'
import { closeIcon, unfilledFileIcon } from '../../icons'


export const NoteElementMini = () => {
    return (
        <div className={`fz-m c-blue bradius-s ${styles.elementMini}`}>
            <div className={styles.left}>
                <img src={unfilledFileIcon} height={2} width={22} alt="" />
                <input type="text" className={`fz-m c-blue`} value={"dsadjslakljasjlas"} />
            </div>
            <button type="button" className={styles.delete}>
                <img height={18} width={18} src={closeIcon} alt="" />
            </button>

        </div>
    )
}
