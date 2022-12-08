import React from 'react'
import TimeCounter from '../../components/timeCounter/timeCounter'

import Header from '../header/header'
import Lower from './lower'

import s from './upper.module.scss'


const upper = () => {
    return (
        <div className={s['upper']}>
            <div className={s['upper-bg']} />

            <Header />

            <div className={s['upper__wrapper'] + ' main-container'}>
                <h1 className={s['upper__title']}>
                    Первый курс <br />по компьютерной сборке
                </h1>
                <TimeCounter />
            </div>

            <Lower />

        </div>
    )
}

export default upper