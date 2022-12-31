import React, { useState, useCallback } from "react";

import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const [value, setvalue] = useState()

    const Navigate = useNavigate()

    const handleJoinRoom = useCallback(() => {
        Navigate(`/Room/${value}`)
    }, [Navigate, value])


    const style = {
        maxwidth: '100px',
        margin: 'auto',
        height: '60vh',

        backgroundColor: 'grey',
        width: '50%',
        padding: '15px',
        margin: '17px 12px',
        border: '4px solid black',
        borderRadius: '55px',
        // alignContent: 'center'
        alignContent: 'space-around',
        textAlign: 'center',
        paddingTop: '15px'
    }

    const button = {
        margin: 'auto',
        float: 'middle',
        borderRadius: '5px',
        border: '2px solid black'

    }
    const roombox = {
        width: '50%',
        textAlign: 'center',
        textAlign: 'center',
        borderRadius: '55px',
        margin: 'auto'

    }
    const logo = {
        display: "block",
        margin: 'auto',
        width: '50px',
        height: '50px'
    }
    return <div style={style}><br /><br /><br />
       
        <input style={roombox}
            value={value} onChange={e => setvalue(e.target.value)}
            type="text"
            placeholder="Enter Room Code" /><br /><br /><br /><br /><br />
        <button style={button} onClick={handleJoinRoom}>Join</button>
    </div>

}

export default HomePage