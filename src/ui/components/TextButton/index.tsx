import { FC } from 'react'
import { TextButtonProps } from './types'
import styles from './textButton.module.scss'

export const TextButton: FC<TextButtonProps> = ({ children, className }) => {
    return (
        <button className={`c-blue ${className} ${styles.button}`} type='button'>{children}</button>
    )
}
