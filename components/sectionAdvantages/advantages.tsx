import React from 'react'
import Image from 'next/image'

import pcIcon from '../../public/icons/pc-icon.svg'
import usbIcom from '../../public/icons/usb.svg'
import connectIcon from '../../public/icons/connect.svg'

import s from './advantages.module.scss'


const advantages = () => {
    return (
        <section className={s['section-advantages'] + ' section main-container'}>
            <h2 className={s['section-advantages__title'] + ' ' + s['section-title']}>
                Получите профессию прямо сейчас
            </h2>
            <div className={s['section-advantages__wrapper']}>
                <div className={s['section-advantages__advantage-card']}>
                    <div className={s['advantage-card__image-box']}>
                        <Image className='no-select' src={pcIcon} alt="card pic" />
                    </div>
                    <h3 className={s['advantage-card__title']}>
                        Только практические<br />навыки в работе
                    </h3>
                    <p className={s['advantage-card__desc']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                    </p>
                </div>
                <div className={s['section-advantages__advantage-card']}>
                    <div className={s['advantage-card__image-box']}>
                        <Image className='no-select' src={usbIcom} alt="card pic" />
                    </div>
                    <h3 className={s['advantage-card__title']}>
                        Работа на самом<br />современном оборудовании
                    </h3>
                    <p className={s['advantage-card__desc']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                    </p>
                </div>
                <div className={s['section-advantages__advantage-card']}>
                    <div className={s['advantage-card__image-box']}>
                        <Image className='no-select' src={connectIcon} alt="card pic" />
                    </div>
                    <h3 className={s['advantage-card__title']}>
                        Сертификация<br />по окончании обучения
                    </h3>
                    <p className={s['advantage-card__desc']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default advantages