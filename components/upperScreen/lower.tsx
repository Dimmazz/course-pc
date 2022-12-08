import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

import s from './lower.module.scss'


const lower = () => {
    return (
        <div className={s['lower__wrapper']}>
            <button className={s['lower__btn'] + ' ' + 'btn'} type="button">
                Заказать курс
            </button>
            <div className={s['lower__column']}>
                <div className={s['lower__text-line']}>
                    <h6 className={s['text-line__desc']}>Учеников всего:</h6>
                    <p className={s['text-line__value']}>200</p>
                </div>
                <div className={s['lower__text-line']}>
                    <h6 className={s['text-line__desc']}>Успешно закончили курс:</h6>
                    <p className={s['text-line__value']}>190</p>
                </div>
            </div>

            <div className={s['lower__column']}>
                <div className={s['lower__text-line']}>
                    <h6 className={s['text-line__desc']}>Заработано учениками:</h6>
                    <p className={s['text-line__value']}>400 000₽</p>
                </div>
                <div className={s['lower__bar-line']}>
                    <ProgressBar
                        completed={400000}
                        maxCompleted={1000000}
                        labelColor="#e80909"
                        bgColor="linear-gradient(94.78deg, #DF5950 11.19%, #451046 93.72%)"
                        isLabelVisible={false}
                        height="6px"
                        borderRadius="0"
                    />
                </div>
            </div>

        </div>
    )
}

export default lower