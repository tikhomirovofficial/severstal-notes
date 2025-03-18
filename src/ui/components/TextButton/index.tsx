import { FC } from 'react'
import { TextButtonProps } from './types'
import styles from './textButton.module.scss'

export const TextButton: FC<TextButtonProps> = ({ children, ...props }) => {
    return (
        <button className={`c-blue ${styles.button}`} type='button' {...props}>{children}</button>
    )
}
