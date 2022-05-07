import React, { useState } from "react";
import Temp from "./Temp";
import Title from "./Title";
import Bg from "./Bg";

const Landing = () => {

    const api = '5c3719064a54df73b8e20ea80f7726ee'
    const kal = 272.15

    var [place, setPlace] = useState('')
    var [info, setInfo] = useState({
        city: 'Welcome To',
        temp: 'Shine',
        cond: 'Weather',
        main: '',
        hue: 0,
    })

    const handleFetch = () => {
        fetch (`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api}`)
            .then((response) => response.json())
            .then((data) => setInfo({
                city: data.name + `, ` + data.sys.country,
                temp: Math.round(data.main.temp - kal) + `°C`,
                cond: data.weather[0].description,
                main: data.weather[0].main,
                hue: 2 * ((data.main.temp - kal) * -1) + 120,
            }))
    }

    return <>

        <Title info={info} name='header' />

        <div id="submit">
            <input id="input"
                type="text" value={place} onChange={(e) => setPlace(e.target.value)} //This is the search input
            >
        </input>

            <button id="search"
                onClick={handleFetch} className="Search" //This is the search button
            >Search</button>
        </div>

        <Title info={info} name='city' />

        <div>
            <svg className='canvas' height='300' width='300' >
                <Temp className='info' info={info} />
                <Bg className='bg' info={info} />
            </svg>
        </div>
        
        <Title info={info} name='cond' />
    </>
}

export default Landing
