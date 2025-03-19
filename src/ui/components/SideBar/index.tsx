import { FC, useEffect, useState } from 'react'
import styles from './sidebar.module.scss'
import { SideBarProps } from './types'
import { SideBarContent } from './content'

export const SideBar: FC<SideBarProps> = ({ opened }) => {
    const [contentVisible, setContentVisible] = useState(true)

    useEffect(() => {
        if (opened) {
            setContentVisible(true)
        } else {
            setTimeout(() => {
                setContentVisible(false)
            }, 300)
        }
    }, [opened])

    return (
        <aside style={{ width: opened ? "100%" : 0 }} className={styles.sidebar}>
            {contentVisible ? <SideBarContent /> : null}
        </aside>
    )
}
