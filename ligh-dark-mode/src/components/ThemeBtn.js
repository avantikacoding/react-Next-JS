import React from 'react'
import { useTheme } from '../context/themes'

export default function ThemeBtn() {
    const[toggleTheme]= useTheme()
  return (
    <div onClick={toggleTheme}>ThemeBtn</div>
  )
}
