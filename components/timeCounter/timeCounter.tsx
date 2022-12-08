import React, { useEffect, useState } from 'react'
import timeValidation from '../../utils/timeValidation'
import s from './timeCounter.module.scss'

const timeCounter = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [time, setTime] = useState(new Date(1534698000))

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime((value: Date) => new Date(value.getTime() - 1000))
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);

    return (
        <div className={s['upper__container-time']}>
            <div className={s['container-time__box']}>
                <h5 className={s['container-time__value']}>{timeValidation(time.getDate())}</h5>
                <p className={s['container-time__desc']}>Дней</p>
            </div>
            <div className={s['container-time__box']}>
                <h5 className={s['container-time__value']}>{timeValidation(time.getHours())}</h5>
                <p className={s['container-time__desc']}>Часов</p>
            </div>
            <div className={s['container-time__box']}>
                <h5 className={s['container-time__value']}>{timeValidation(time.getMinutes())}</h5>
                <p className={s['container-time__desc']}>Минут</p>
            </div>
            <div className={s['container-time__box']}>
                <h5 className={s['container-time__value']}>{timeValidation(time.getSeconds())}</h5>
                <p className={s['container-time__desc']}>Секунд</p>
            </div>
        </div>
    )
}

export default timeCounter