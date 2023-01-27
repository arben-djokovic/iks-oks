import React from 'react'
import { useNavigate } from 'react-router';

export default function GameFinished() {
    var navigate = useNavigate()
    return (
        <div className='endPage'>
            <h1>Yeyyy, you WIN!</h1>
            <button onClick={() => { navigate('/') }}>Restart</button>
        </div>
    )
}
