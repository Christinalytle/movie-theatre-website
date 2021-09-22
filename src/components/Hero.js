import React from 'react'; 
import picture from '../pictures/Movie-Theatre.png'
import {Image} from 'semantic-ui-react'


function Hero() {
    return (
    <Image src={picture} alt="theatre logo" fluid />
    )
}

export default Hero; 