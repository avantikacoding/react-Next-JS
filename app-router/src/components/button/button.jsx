import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import facebook from '../../../public/1.png'
import styles from './button.module.scss'
// import facebook from '@public/1.png' //Not working 

export default function Button({ text, url }) {
  return (
      <Link href={url}>
        <button className={styles.container}>{text}</button>
      </Link>

  )
}
