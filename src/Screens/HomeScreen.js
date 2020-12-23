import React, { useState, useEffect } from 'react'
import List from '../components/Home/List'
import SearchBar from '../components/Home/SearchBar'
import { COCTAIL_ALL, FILTER_BY_ALCO, SEARCH_BY_NAME } from '../config'

import './Home.css'

export default function HomeScreen() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getAllCoctails()
    }, [])

    const getAllCoctails = async () => {
        let response = await fetch(COCTAIL_ALL)
        let request = await response.json()
        setData(request.drinks)
    }
    const getCoctailsByName = async (latter) => {
        if (latter.length <= 1 || latter == '') {
            getAllCoctails()
        }
        else {
            let response = await fetch(SEARCH_BY_NAME + latter)
            let request = await response.json()
            setData(request.drinks)
        }
    }
    // Filter coctails
    const filterByAlc = async (fltr) => {
        if (fltr == 'All') {
            getAllCoctails()

        } else {
            let res = await fetch(FILTER_BY_ALCO + fltr)
            let req = await res.json()
            setData(req.drinks)
        }
    }

    // 
    return (
        <div>
           
            <h1>One day at a time</h1>
            <SearchBar
                getCoctailsByName={getCoctailsByName}
                filterByAlc={filterByAlc}
            />
            <List
                data={data}
            />
        </div>

    )
}
