import React from 'react'
import Image from 'next/image'

import teacher1 from '../../public/img/teacher-1.png'
import teacher2 from '../../public/img/teacher-2.png'
import teacher3 from '../../public/img/teacher-3.png'

import s from './teachers.module.scss'
    

const teachers = () => {
    return (
        <section className={s['section-teachers'] + ' section main-container'}>
            <h2 className={s['section-title'] + ' ' + s['section-title-icon'] + ' ' + s['section-teachers__title']}>
                Ваши преподаватели
            </h2>
            <div className={s['section-teachers__wrapper']}>
                <div className={s['section-teachers__teacher-card']}>
                    <div className={s['teacher-card__img-box']}>
                        <Image className={s['teacher-card__img']} src={teacher1} alt='' />
                    </div>
                    <h3 className={s['teacher-card__title']}>
                        Дмитрий Иванов
                    </h3>
                    <p className={s['teacher-card__desc']}>
                        Специалист по видеокартам
                    </p>
                    <div className={s['teacher-card__btn-box']}>
                        <button className={s['teacher-card__btn'] + ' btn'} type='button'>Биография</button>
                    </div>
                </div>
                <div className={s['section-teachers__teacher-card']}>
                    <div className={s['teacher-card__img-box']}>
                        <Image className={s['teacher-card__img']} src={teacher2} alt='' />
                    </div>
                    <h3 className={s['teacher-card__title']}>
                        Дмитрий Иванов
                    </h3>
                    <p className={s['teacher-card__desc']}>
                        Специалист по видеокартам
                    </p>
                    <div className={s['teacher-card__btn-box']}>
                        <button className={s['teacher-card__btn'] + ' btn'} type='button'>Биография</button>
                    </div>
                </div>
                <div className={s['section-teachers__teacher-card']}>
                    <div className={s['teacher-card__img-box']}>
                        <Image className={s['teacher-card__img']} src={teacher3} alt='' />
                    </div>
                    <h3 className={s['teacher-card__title']}>
                        Дмитрий Иванов
                    </h3>
                    <p className={s['teacher-card__desc']}>
                        Специалист по видеокартам
                    </p>
                    <div className={s['teacher-card__btn-box']}>
                        <button className={s['teacher-card__btn'] + ' btn'} type='button'>Биография</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default teachers