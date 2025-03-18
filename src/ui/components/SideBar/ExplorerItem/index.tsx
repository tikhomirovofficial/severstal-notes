import React, { FC } from 'react'
import styles from './explorerItem.module.scss'
import { ExplorerItemProps } from './types'



export const ExplorerItem: FC<ExplorerItemProps> = () => {
    const isFolder = Object.hasOwnProperty("count")

    if (Object.hasOwnProperty("count")) {
        return <li className={`bradius-s ${styles.item}`}>
            <div className={styles.left}>
                <svg width="19" height="17" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.88571C1 3.52558 1 2.84552 1.26643 2.32602C1.50078 1.86905 1.87473 1.49753 2.33469 1.2647C2.85758 1 3.5421 1 4.91111 1H9.15775C9.75563 1 10.0546 1 10.3359 1.0671C10.5853 1.12659 10.8237 1.22472 11.0425 1.35787C11.2892 1.50806 11.5006 1.71807 11.9234 2.1381L12.0766 2.29047C12.4994 2.7105 12.7108 2.92051 12.9575 3.0707C13.1763 3.20386 13.4147 3.30198 13.6641 3.36147C13.9454 3.42857 14.2444 3.42857 14.8423 3.42857H19.0889C20.4579 3.42857 21.1425 3.42857 21.6653 3.69327C22.1253 3.9261 22.4993 4.29762 22.7336 4.7546C23 5.27409 23 5.95416 23 7.31429V14.1143C23 15.4744 23 16.1545 22.7336 16.674C22.4993 17.1309 22.1253 17.5025 21.6653 17.7353C21.1425 18 20.4579 18 19.0889 18H4.91111C3.54209 18 2.85758 18 2.33469 17.7353C1.87473 17.5025 1.50078 17.1309 1.26643 16.674C1 16.1545 1 15.4744 1 14.1143V4.88571Z"
                        stroke="#707070" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className={`fz-s`}>Раздел 1</span>
            </div>
            <span className={`fz-s ${styles.count}`}>14</span>
        </li>
    }
    return (
        <li className={`bradius-s ${styles.item}`}>
            <div className={styles.left}>
                <span className={`fz-s`}>Раздел 1</span>
            </div>
        </li>
    )
}
