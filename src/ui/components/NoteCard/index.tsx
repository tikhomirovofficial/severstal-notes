import React from 'react'
import styles from './noteCard.module.scss'
import { categoryIcon, copyIcon, letterIcon, refreshIcon } from '../../icons'

export const NoteCard = () => {
    return (
        <article className={`bradius-l ${styles.card}`}>
            <input className={`fz-xl ${styles.name}`} value={"Какая-то заметка"}/>
            <div className={`c-blue ${styles.info}`}>
                <div title={"Последнее обновление 17.03.2025"} className={styles.item}>
                    <img src={refreshIcon} height={16} width={16} alt="" />
                    <span className='fz-s'>17.03.2025</span>
                </div>
                <div title={"432 символов"} className={styles.item}>
                    <img src={categoryIcon} height={16} width={15} alt="" />
                    <span className='fz-s'>432 Символа</span>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomInfo}>
                    <span className={`c-gray ${styles.created}`}>Создано: 15.03.2025</span>
                </div>
                <button type="button" className={`${styles.copyBtn}`}>
                    <img src={copyIcon} height={16} width={16} alt="" />
                </button>


            </div>

        </article>
    )
}
