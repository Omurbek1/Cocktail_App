import React from 'react'
import { Link } from 'react-router-dom'
import './View.css'

export default function View(props) {
    return (


        <div>
           
            {props.info &&
                <div className="text">

                    <img style={{ marginLeft: "350px", borderRadius: "25px", marginTop: "65px" }} src={props.info.strDrinkThumb} />
                    <h1 className="h1">{props.info.strDrink}</h1>
                    <br />
                    <br />
                    <p>{props.info.strInstructions}</p>
                    <b className="b">Ingridient</b>
                    <ul>
                        <Link to={'/ingridient/' + props.info.strIngredient1}><li>{props.info.strIngredient1}</li>  </Link>
                        <Link to={'/ingridient/' + props.info.strIngredient2}><li>{props.info.strIngredient2}</li>  </Link>
                        <Link to={'/ingridient/' + props.info.strIngredient3}> <li>{props.info.strIngredient3}</li> </Link>
                        <Link to={'/ingridient/' + props.info.strIngredient4}>  <li>{props.info.strIngredient4}</li> </Link>
                    </ul>
                    <b  className="b">Measure</b>
                    <ul>
                        <li>{props.info.strMeasure1}</li>
                        <li>{props.info.strMeasure2}</li>
                        <li>{props.info.strMeasure3}</li>
                        <li>{props.info.strMeasure4}</li>
                    </ul>
                </div>
            }
        </div>
    )
}
