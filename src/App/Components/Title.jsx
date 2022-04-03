import React from "react";

const Title = (props) => {
    var info = {
        city: props.info.city,
        cond: props.info.cond,
        hue: props.info.hue,
    }

    switch(props.name) {

        case 'header':
            return <h1>Shine Weather</h1>

        case 'city':
            return <h1>{info.city}</h1>

        case 'cond':
            return <h1>{info.cond}</h1>
    }

}

export default Title