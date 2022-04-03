import anime from "animejs";
import React, { useEffect, useRef } from "react";

const Clouds = () => {
    
    const animeRef = useRef()
    useEffect(() => {
        animeRef.current = anime({
            targets: '.el',
            strokeDashoffset: [anime.setDashoffset, 0],
            translateY: -100,
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: false,
        })
    })

    return <>
        <svg height='300' width='300' >
            <path d='   M 275 275 
                        L 25 275 
                        C 0 275 10 250 20 250
                        C 5 200 75 150 125 200 
                        M 100 184
                        C 75 100 250 50 250 195
                        M 210 225
                        C 210 190 300 170 295 250
                        C 295 250 295 275 275 275
                        ' className='el' stroke='black' fill='transparent' />
        </svg>
    </>
}

export default Clouds