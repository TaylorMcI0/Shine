import React from "react";
import Thunderstorm from './Anim/Thunderstorm'
import Drizzle from './Anim/Drizzle'
import Rain from './Anim/Rain'
import Atmosphere from './Anim/Atmosphere'
import Snow from './Anim/Snow'
import Clouds from './Anim/Clouds'
import Clear from './Anim/Clear'

const Bg = (props) => {

    var info = {
        main: props.info.main,
        hue: props.info.hue,
    }

    switch(info.main) {
        case 'Thunderstorm':
            return <Thunderstorm info={info} />

        case 'Drizzle':
            return <Drizzle info={info} />

        case 'Rain':
            return <Rain info={info} />

        case 'Atmosphere':
            return <Atmosphere info={info} />

        case 'Snow':
            return <Snow info={info} />

        case 'Clouds':
            return <Clouds info={info} />

        case 'Clear':
            return <Clear info={info} />
    }
}

export default Bg