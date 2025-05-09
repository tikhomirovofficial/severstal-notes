import { FC } from 'react'
import styles from './search.module.scss'
import { SearchProps } from './types'


export const Search: FC<SearchProps> = ({ placeholder = "Поиск", value = "", onChange }) => {
    return (
        <form className={`bg-lt-search bradius-m ${styles.search}`}>
            <label htmlFor="notes-search">
                <input value={value} onChange={onChange} id='notes-search' type="search" inputMode='search' placeholder={placeholder} className={`fz-s`} />
            </label>
        </form>
    )
}
