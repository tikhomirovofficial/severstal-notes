import React, { FC } from 'react'
import styles from './search.module.scss'
import { SearchProps } from './types'
import { searchIcon } from '../../icons'


export const Search: FC<SearchProps> = ({ placeholder = "Поиск" }) => {
    return (
        <form className={`bg-lt-search bradius-m ${styles.search}`}>
            <label htmlFor="notes-search">
                <input id='notes-search' type="search" inputMode='search' placeholder={placeholder} className='sas' />
            </label>
            <button className={styles.btn} type="button">
                <img height={20} width={20} src={searchIcon} alt="" />
            </button>
        </form>
    )
}
