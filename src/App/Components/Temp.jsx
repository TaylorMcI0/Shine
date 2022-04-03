import anime from "animejs";
import React, { useEffect, useRef } from "react";

const Temp = (props) => {

    var info = {
        temp: props.info.temp,
        hue: props.info.hue,
    }
    
    const animeRef = useRef()
    useEffect(() => {
        animeRef.current = anime({
            targets: '.temp',
            
        })
    })

    return<>
        <text className='temp' x='10%' y='12%' textAnchor='middle' fontWeight='bold' transform="scale(5)" file='black'>{info.temp}</text>
    </>
}

export default Temp