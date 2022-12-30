import React, { useState,useCallback } from "react";

import {useNavigate} from 'react-router-dom'

const HomePage =()=>{
const [value , setvalue] = useState()

const Navigate = useNavigate()

const handleJoinRoom = useCallback(()=>{
    Navigate(`/Room/${value}`)
},[Navigate , value])

    return  <div>
        <input
         value={value} onChange={e=>setvalue(e.target.value)}
          type="text" 
          placeholder="Enter Room Code"/>
        <button onClick={handleJoinRoom}>Join</button>
    </div>
    
}

export default HomePage