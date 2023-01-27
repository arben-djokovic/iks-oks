import React from 'react'
import { useNavigate } from 'react-router';

export default function GameTie() {
    var navigate = useNavigate()
    return (
        <div className='endPage'>
            <h1>Game finished TIE</h1>
            <button onClick={()=>{navigate('/')}}>Restart</button>
        </div>
    )
}
