import React from 'react'
import { homeObjOne, homeObjTwo, homeObjFour} from './Data'
import { InfoSection, Pricing} from '../../components'
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Pricing/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
