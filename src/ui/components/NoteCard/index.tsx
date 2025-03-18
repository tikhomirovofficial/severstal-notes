import React from 'react'
import styles from './noteCard.module.scss'
import { letterIcon, refreshIcon } from '../../icons'

export const NoteCard = () => {
    return (
        <article className={`bradius-l ${styles.card}`}>
            <h2 className={`fz-xl ${styles.name}`}>Какая-то заметка</h2>
            <div className={`c-blue ${styles.info}`}>
                <div title={"Последнее обновление 17.03.2025"} className={styles.item}>
                    <img src={refreshIcon} height={15} width={15} alt="" />
                    <span className='fz-s'>17.03.2025</span>
                </div>
                <div title={"432 символов"} className={styles.item}>
                    <img src={letterIcon} height={16} width={13} alt="" />
                    <span className='fz-s'>432</span>
                </div>

            </div>

        </article>
    )
}
