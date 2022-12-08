import React from 'react'
import s from './header.module.scss'


interface IProps {
    link?: string,
    text: string
}


const headerMenuItem = ({ link, text }: IProps) => {
    return (
        <li className={s['header-menu__item']}>
            <a href={link} className="menu-item__link">
                {text}
            </a>
        </li>
    )
}

headerMenuItem.defaultProps = { link: "error/404" };

export default headerMenuItem