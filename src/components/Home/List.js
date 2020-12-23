import React from 'react'
import { Link } from 'react-router-dom'


import  './List.css'

export default function List(props) {
    return (

        
        <div  className ="list">
            {props.data ?
                props.data.map(el => {
                    return (
                        <Link to={'/detail/'+el.idDrink} key={el.idDrink}>
                            <div>
                                <h3 className="h3">{el.strDrink}</h3>
                                <img className='img' style={{width:"320px"}} src={el.strDrinkThumb} />
                            </div>
                        </Link>
                    )
                })
                : <h5>Загруска....</h5>
            }
        </div>
        
    )
}
