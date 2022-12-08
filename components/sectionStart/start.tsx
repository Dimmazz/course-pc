import React from 'react'
import s from './start.module.scss'

const start = () => {
    return (
        <section className={s['section-start'] + ' section main-container'}>
            <div className={s['section-start__title-container']}>
                <h2 className={s['section-title'] + ' ' + s['section-title-icon'] + ' ' + s['section-start__title-upper']}>
                    Быстрый старт
                </h2>
                <p className={s['section-start__desc-title']}>
                    Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер
                </p>
            </div>
            <div className={s['section-start__wrapper']}>
                <div className={s['section-start__inner']}>
                    <div className={s['section-start__box']}>
                        <h4 className={s['section-start__title']}>100%</h4>
                        <div className={s['section-start__gradient-block'] + ' ' + s['section-start__gradient-block--100']}></div>
                        <p className={s['section-start__desc']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                    <div className={s['section-start__box']}>
                        <h4 className={s['section-start__title']}>75%</h4>
                        <div className={s['section-start__gradient-block'] + ' ' + s['section-start__gradient-block--75']}></div>
                        <p className={s['section-start__desc']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                </div>
                <div className={s['section-start__inner']}>
                    <div className={s['section-start__box']}>
                        <h4 className={s['section-start__title']}>50%</h4>
                        <div className={s['section-start__gradient-block'] + ' ' + s['section-start__gradient-block--50']}></div>
                        <p className={s['section-start__desc']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                    <div className={s['section-start__box']}>
                        <h4 className={s['section-start__title']}>Итог</h4>
                        <div className={s['section-start__gradient-block'] + ' ' + s['section-start__gradient-block--done']}></div>
                        <p className={s['section-start__desc']}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default start