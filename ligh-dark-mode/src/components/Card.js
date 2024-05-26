import React from 'react'
import { useTheme } from '../context/themes'
import ThemeBtn from './ThemeBtn'
import '../App.scss'
export default function Card() {
    const [toggleTheme, theme] = useTheme()
    return (
        <div className={theme ? 'light' : 'dark'}>
            <ThemeBtn />
            <div className='card'>
                csrd {theme ? 'light' : 'dark'}

            </div>
        </div>
    )
}
