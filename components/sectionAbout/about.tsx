import React from 'react'
import Image from 'next/image'
import s from './about.module.scss'

import pcIMG from '../../public/img/pc.png'


const about = () => {
    return (
        <section className={s['section-about'] + ' section main-container'}>
            <div className={s['section-about__img-block']}>
                <Image className={s['section-about__img'] + ' no-select'} src={pcIMG} alt="About Us" />
            </div>
            <div className={s['section-about__text-block']}>
                <h4 className={s['section-about__title'] + ' ' + s['section-title']}>
                    Чем мы занимаемся?
                </h4>
                <p className={s['section-about__desc']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.
                </p>
            </div>
        </section>
    )
}

export default about