import React, { useState, useEffect } from 'react'
import View from '../components/Detail/View'
import { COCTAIL_BY_ID } from '../config'

export default function DetailScreen(props) {
    const [fullInfo, setFullInfo] = useState(null)

    useEffect(() => {
        let param = props.match.params.id
        getDetailInfo(param)
    }, [])

    const getDetailInfo = async (prm) => {
        let res = await fetch(COCTAIL_BY_ID+prm)
        let req = await res.json()
        console.log(req.drinks[0])
        setFullInfo(req.drinks[0])
    }
    return (
        <div>
          <span onClick={
              props.history.goBack
          }>{'<--'}</span>

            <View 
            info={fullInfo}
                
            />
        </div>
    )
}
