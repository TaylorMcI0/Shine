import anime, { path } from "animejs";
import React, { useEffect, useRef } from "react";

const Clear = (props) => {

    const hue = props.info.hue

    const animeRef = useRef()
    useEffect(() => {
        animeRef.current = anime({
            targets: '.el',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            opacity: [0, 1],
            duration: 1500,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
        })
    })

    return <>
            <circle className='el' cx='150' cy='150' r='75' fill='transparent' stroke='black' />

            <polyline className='el' points='150,10 125,70 175,70 150,10' fill='transparent' stroke='black' />
            <polyline className='el' points='255,45 187,73 227,113 255,45' fill='transparent' stroke='black' />
            <polyline className='el' points='290,150 230,125 230,175 290,150' fill='transparent' stroke='black' />
            <polyline className='el' points='255,255 227,187 187,227 255,255' fill='transparent' stroke='black' />
            <polyline className='el' points='150,290 175,230 125,230 150,290' fill='transparent' stroke='black' />
            <polyline className='el' points='45,255 113,227 73,187 45,255' fill='transparent' stroke='black' />
            <polyline className='el' points='10,150 70,175 70,125 10,150' fill='transparent' stroke='black' />
            <polyline className='el' points='45,45 73,113 113,73 45,45' fill='transparent' stroke='black' />

            <circle className='el' cx='150' cy='150' r='75' fill='transparent' stroke='black' />
    </>
}

export default Clear