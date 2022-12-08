import React from 'react'
import Image from 'next/image'

import vk from '../../public/icons/vk.svg'
import youtube from '../../public/icons/youtube.svg'
import facebook from '../../public/icons/facebook.svg'
import instagram from '../../public/icons/instagram.svg'

import s from './footer.module.scss'

const footer = () => {
    return (
        <footer className={s['footer']}>
            <div className={s['footer__title-container']}>
                <h2 className={s['section-title'] + ' ' + s['footer__title']}>
                    Статьи каждую неделю
                </h2>
                <p className={s['footer__desc-title']}>
                    Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер
                </p>
            </div>
            <div className={s['footer__email-box']}>
                <input className={s['footer__email']} type="email" name="email" id="email" placeholder='E-mail' />
                <button className={s['footer__email-btn'] + ' btn'} type='button'>
                    Подписаться
                </button>
            </div>
            <ul className={s['footer__social']}>
                <li className={s['footer__social-item']}>
                    <a className={s['footer__social-link']} href="error/404" target="_blank" rel="noopener noreferrer">
                        <Image src={vk} alt='Vk' />
                    </a>
                </li>
                <li className={s['footer__social-item']}>
                    <a className={s['footer__social-link']} href="error/404" target="_blank" rel="noopener noreferrer">
                        <Image src={youtube} alt='Youtube' />
                    </a>
                </li>
                <li className={s['footer__social-item']}>
                    <a className={s['footer__social-link']} href="error/404" target="_blank" rel="noopener noreferrer">
                        <Image src={facebook} alt='Facebook' />
                    </a>
                </li>
                <li className={s['footer__social-item']}>
                    <a className={s['footer__social-link']} href="error/404" target="_blank" rel="noopener noreferrer">
                        <Image src={instagram} alt='Instagram' />
                    </a>
                </li>
            </ul>
            <p className={s['footer__copy']}>
                &copy; <a href="https://dimmazz.github.io/SadPortfolio/">Dimmazz</a> & <a href="http://Figma.info">Figma.info</a>
            </p>
            <p className={s['footer__copy']}>
                Templates #18. More on <a href="http://Figma.info">Figma.info</a>
            </p>
        </footer>
    )
}

export default footer
