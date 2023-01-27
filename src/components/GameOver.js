import React from 'react'
import { useNavigate } from 'react-router';

export default function GameOver() {
    var navigate = useNavigate()
    return (
        <div className='endPage'>
            <h1>You lost!</h1>
            <button onClick={()=>{navigate('/')}}>Restart</button>
        </div>
    )
}
