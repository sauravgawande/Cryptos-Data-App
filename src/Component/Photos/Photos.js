import React, { useState } from 'react'

import axios from 'axios';
import './Photos.css'
import TableComponent from '../TableComponent';

function Photos() {
    const[data,setData] = useState([])
    
    

    useState(()=>{
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then((resolve)=>setData(resolve.data))
            .catch((err)=>(console.log(err)))
    },[])
  return (
      <div>
         <TableComponent data={data}/>
      </div>
  )
}

export default Photos