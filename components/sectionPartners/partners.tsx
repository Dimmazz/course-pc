import React from 'react'
import Image from 'next/image'

import partnersIMG from '../../public/img/msi.png'

import s from './partners.module.scss'


const partners = () => {
    return (
        <section className={s['section-partners'] + ' section main-container'}>
            <h2 className={s['section-title'] + ' ' + s['section-title-icon'] + ' ' + s['section-partners__title']}>
                Партнеры - топовые бренды
            </h2>
            <div className={s['section-partners__wrapper']}>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
                <div className={s['section-partners__item']}>
                    <Image src={partnersIMG} alt='Our partner' />
                </div>
            </div>
        </section>
    )
}

export default partners