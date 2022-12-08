import React from 'react'


const timeValidation = (time: number) => {
    if (time < 10) {
        return `0${time}` as string
    }
    return time as number
}

export default timeValidation