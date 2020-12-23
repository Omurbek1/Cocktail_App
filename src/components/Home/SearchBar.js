import React, { useState } from 'react'
import  './search.css'

export default function SearchBar(props) {
    const [value, setValue] = useState('')
    return (
        
        <div className='search-div'>

            <input
                type="text"
                value={value}
                placeholder="seach coctail"
                id="dynamic-label-input"
                onChange={event => {
                    setValue(event.target.value);
                    props.getCoctailsByName(value)
                }}
            />
            <label for="dynamic-label-input"> to choose  coctail</label>
            <select onChange={
                (event) => props.filterByAlc(event.target.value)
            }>

                <option value="All" default >All</option>
                <option value="Alcoholic" >Alcoholic</option>
                <option value="Non_Alcoholic">Non_Alcoholic</option>
            </select>
        </div>
    )
}
