import React, { useState, useEffect } from "react"
import axios from "axios"
import './FetchData.css'

const FetchData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await axios.get('http://localhost:5000/customdata')
        // console.log(res.data)
        setData(res.data)
    }

    return (
        <div>
            <h3>Random Data</h3>
            <ul>
                {data.map(single => (
                    <li key={single.id}>{single.firstName} {single.lastName}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchData
