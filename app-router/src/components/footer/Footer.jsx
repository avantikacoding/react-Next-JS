import Image from 'next/image'
import React from 'react'
import facebook from '../../../public/1.png'
import styles from './navBar.module.scss'
// import facebook from '@public/1.png' //Not working 

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Avantika. All rights reserved.</div>
      <div className={styles.social}>
        {/* //** <Image alt='facebook' src={facebook}></Image> // <- This will work without  width={15} height={15} but need to size it for consistancy */}
        <Image alt='facebook' width={15} height={15} className={styles.icon} src={facebook}></Image> 
        <Image alt='facebook' width={15} height={15} className={styles.icon} src='/2.png'></Image>
        <Image alt='facebook' width={15} height={15} className={styles.icon} src='/3.png'></Image>
        <Image alt='facebook' width={15} height={15} className={styles.icon} src='/4.png'></Image>
      </div>
    </div>

  )
}
