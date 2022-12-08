import * as React from 'react'
import Image from 'next/image'
import HeaderMenuItem from './headerMenuItem'

import logo from '../../public/icons/logo.svg'

import s from './header.module.scss'


const header = () => {

    const links = [
        {
            link: "error/404",
            text: "Главная"
        },
        {
            link: "error/404",
            text: "Курсы"
        },
        {
            link: "error/404",
            text: "Расписание"
        },
        {
            link: "error/404",
            text: "Преподаватели"
        },
        {
            link: "error/404",
            text: "Рассылка"
        },
        {
            link: "error/404",
            text: "Контакты"
        }
    ]

    return (
        <header className={s['header']}>
            <div className={s['header__logo'] + ' no-select logo'}>
                <Image src={logo} alt="Logo" />
            </div>
            <nav className={s['header__header-nav']}>
                <ul className={s['header__header-menu']}>

                    {
                        links.map((menuItem, index) => {
                            return <HeaderMenuItem key={index} link={menuItem.link} text={menuItem.text} />
                        })
                    }
                </ul>
            </nav>
            <button className={s['header__btn'] + ' ' + 'btn'} type="button">
                Зайти в кабинет
            </button>
        </header>
    )
}

export default header