import React from 'react'
import styles from './noteWindow.module.scss'
import { refreshIcon, categoryIcon, arrowLeftIcon } from '../../icons'

export const NoteWindowContent = () => {
    return (
        <section className={styles.content}>
            <header className={styles.header}>
                <button  className={`c-blue fz-l ${styles.back}`}>
                    <img src={arrowLeftIcon} alt="" />
                    <span>Назад</span>
                </button>
                <input type="text" className={`title ${styles.title}`} value={"Текущая заметка"} />
                <div className={`c-blue ${styles.info}`}>
                    <div title={"Последнее обновление 17.03.2025"} className={styles.item}>
                        <img src={refreshIcon} height={18} width={18} alt="" />
                        <span className='fz-m'>17.03.2025</span>
                    </div>
                    <div title={"432 символов"} className={styles.item}>
                        <img src={categoryIcon} height={18} width={17} alt="" />
                        <span className='fz-m'>432 Символа</span>
                    </div>
                </div>
                <span className={`c-gray`}>Создано: 15.03.2025</span>
            </header>
            <div className={styles.noteWrapper}>
                <textarea className='fz-l' name="" id="" placeholder='Напишите что-нибудь...'>
                </textarea>
            </div>
        </section>
    )
}
