import React, { useState, useEffect } from 'react'
import { SEARCH_BY_INGRIDIENT } from '../config'
import './ingrid.css'

export default function IngridientScreen(props) {

    const [ing, setIng] = useState(null)

    // const [ing, settIng] = useState(null)

    useEffect(() => {
        let param = props.match.params.name
        getIngridient(param)
    },[])

    const getIngridient = async (prm) => {
        let res = await fetch(SEARCH_BY_INGRIDIENT + prm)
        let req = await res.json()
        setIng(req? req.ingredients[0]:null)
        console.log(req)
    }


    return (
        <div className="ingrid">
            <span  className="goback" onClick={
                props.history.goBack
            }>{'<--'}</span>
            {ing ?
                <div>
                        <h1>{ing.strIngredient}</h1>
                        <p>Type: {ing.strType}</p>
                        <span>
                        <span className="span">All:</span>
                            <input type="checkBox"
                            defaultChecked={ing.strAlcohol=="Yes" ? true : false}
                            readOnly={true}
                            disabled 
                            />
                        </span><br/>
                       
                        <b><i>{ing.strDescription}</i></b>
                </div>
                :
                <h1>Result Undefined</h1>
          }
        </div>
    )
}
