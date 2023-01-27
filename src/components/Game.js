import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Game() {
    var navigate = useNavigate()
    var odigranaPolja = []
    var odigraniComp = []
    var odigraniUser = []
    let random
    var kraj = false

    var GameOver = () => {
        kraj = true
        setTimeout(() => {
            navigate('/game-over')
        }, 200);
    }
    var GameTie = () =>{
        kraj = true
        setTimeout(() => {
            navigate('/game-tie')
        }, 200);
    }
    var GameFinished = () => {
        kraj = true
        setTimeout(() => {
            navigate('/game-finished')
        }, 200);
    }
    var CheckUser = () => {
        if (!kraj) {
            if (odigraniUser.includes('1') && odigraniUser.includes('2') && odigraniUser.includes('3')) {
                document.getElementById(1).style.cssText += 'background-color: blue'
                document.getElementById(2).style.cssText += 'background-color: blue'
                document.getElementById(3).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigraniUser.includes('1') && odigraniUser.includes('4') && odigraniUser.includes('7')) {
                document.getElementById(1).style.cssText += 'background-color: blue'
                document.getElementById(4).style.cssText += 'background-color: blue'
                document.getElementById(7).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigraniUser.includes('1') && odigraniUser.includes('5') && odigraniUser.includes('9')) {
                document.getElementById(1).style.cssText += 'background-color: blue'
                document.getElementById(5).style.cssText += 'background-color: blue'
                document.getElementById(9).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigraniUser.includes('2') && odigraniUser.includes('5') && odigraniUser.includes('8')) {
                document.getElementById(2).style.cssText += 'background-color: blue'
                document.getElementById(5).style.cssText += 'background-color: blue'
                document.getElementById(8).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigraniUser.includes('3') && odigraniUser.includes('6') && odigraniUser.includes('9')) {
                document.getElementById(3).style.cssText += 'background-color: blue'
                document.getElementById(6).style.cssText += 'background-color: blue'
                document.getElementById(9).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigraniUser.includes('4') && odigraniUser.includes('5') && odigraniUser.includes('6')) {
                document.getElementById(4).style.cssText += 'background-color: blue'
                document.getElementById(5).style.cssText += 'background-color: blue'
                document.getElementById(6).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigraniUser.includes('7') && odigraniUser.includes('8') && odigraniUser.includes('9')) {
                document.getElementById(7).style.cssText += 'background-color: blue'
                document.getElementById(8).style.cssText += 'background-color: blue'
                document.getElementById(9).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigraniUser.includes('7') && odigraniUser.includes('5') && odigraniUser.includes('3')) {
                document.getElementById(7).style.cssText += 'background-color: blue'
                document.getElementById(5).style.cssText += 'background-color: blue'
                document.getElementById(3).style.cssText += 'background-color: blue'
                GameFinished()
            }
            else if (odigranaPolja.length === 9) {
                setTimeout(() => {
                    GameTie()
                }, 300);
            }
        }
    }
    var CheckComp = () => {
        if (!kraj) {
            if (odigraniComp.includes('1') && odigraniComp.includes('2') && odigraniComp.includes('3')) {
                document.getElementById(1).style.cssText += 'background-color: red'
                document.getElementById(2).style.cssText += 'background-color: red'
                document.getElementById(3).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigraniComp.includes('1') && odigraniComp.includes('4') && odigraniComp.includes('7')) {
                document.getElementById(1).style.cssText += 'background-color: red'
                document.getElementById(4).style.cssText += 'background-color: red'
                document.getElementById(7).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigraniComp.includes('1') && odigraniComp.includes('5') && odigraniComp.includes('9')) {
                document.getElementById(1).style.cssText += 'background-color: red'
                document.getElementById(5).style.cssText += 'background-color: red'
                document.getElementById(9).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigraniComp.includes('2') && odigraniComp.includes('5') && odigraniComp.includes('8')) {
                document.getElementById(2).style.cssText += 'background-color: red'
                document.getElementById(5).style.cssText += 'background-color: red'
                document.getElementById(8).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigraniComp.includes('3') && odigraniComp.includes('6') && odigraniComp.includes('9')) {
                document.getElementById(3).style.cssText += 'background-color: red'
                document.getElementById(6).style.cssText += 'background-color: red'
                document.getElementById(9).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigraniComp.includes('4') && odigraniComp.includes('5') && odigraniComp.includes('6')) {
                document.getElementById(4).style.cssText += 'background-color: red'
                document.getElementById(5).style.cssText += 'background-color: red'
                document.getElementById(6).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigraniComp.includes('7') && odigraniComp.includes('8') && odigraniComp.includes('9')) {
                document.getElementById(7).style.cssText += 'background-color: red'
                document.getElementById(8).style.cssText += 'background-color: red'
                document.getElementById(9).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigraniComp.includes('7') && odigraniComp.includes('5') && odigraniComp.includes('3')) {
                document.getElementById(7).style.cssText += 'background-color: red'
                document.getElementById(5).style.cssText += 'background-color: red'
                document.getElementById(3).style.cssText += 'background-color: red'
                GameOver()
                console.log('a')
            }
            else if (odigranaPolja.length === 9) {
                setTimeout(() => {
                    GameTie()
                }, 300);
            }
        }
    }

    var computerMove = () => {
        if(odigraniComp.includes('1') && odigraniComp.includes('2') && !odigranaPolja.includes('3')){
            random = 3
        }
        else if(odigraniComp.includes('2') && odigraniComp.includes('3') && !odigranaPolja.includes('1')){
            random = 1
        }
        else if(odigraniComp.includes('1') && odigraniComp.includes('3') && !odigranaPolja.includes('2')){
            random = 2  
        }
        else if(odigraniComp.includes('1') && odigraniComp.includes('4') && !odigranaPolja.includes('7')){
            random = 7
        }
        else if(odigraniComp.includes('4') && odigraniComp.includes('7') && !odigranaPolja.includes('1')){
            random = 1  
        }
        else if(odigraniComp.includes('1') && odigraniComp.includes('7') && !odigranaPolja.includes('4')){
            random = 4 
        }
        else if(odigraniComp.includes('2') && odigraniComp.includes('5') && !odigranaPolja.includes('8')){
            random = 8
        }
        else if(odigraniComp.includes('5') && odigraniComp.includes('8') && !odigranaPolja.includes('2')){
            random = 2
        }
        else if(odigraniComp.includes('2') && odigraniComp.includes('8') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniComp.includes('3') && odigraniComp.includes('6') && !odigranaPolja.includes('9')){
            random = 9
        }
        else if(odigraniComp.includes('3') && odigraniComp.includes('9') && !odigranaPolja.includes('6')){
            random = 6
        }
        else if(odigraniComp.includes('6') && odigraniComp.includes('9') && !odigranaPolja.includes('3')){
            random = 3
        }
        else if(odigraniComp.includes('4') && odigraniComp.includes('5') && !odigranaPolja.includes('6')){
            random = 6
        }
        else if(odigraniComp.includes('4') && odigraniComp.includes('6') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniComp.includes('5') && odigraniComp.includes('6') && !odigranaPolja.includes('4')){
            random = 4
        }   
        else if(odigraniComp.includes('7') && odigraniComp.includes('8') && !odigranaPolja.includes('9')){
            random = 9
        }
        else if(odigraniComp.includes('7') && odigraniComp.includes('9') && !odigranaPolja.includes('8')){
            random = 8
        }
        else if(odigraniComp.includes('8') && odigraniComp.includes('9') && !odigranaPolja.includes('7')){
            random = 7
        }
        else if(odigraniComp.includes('1') && odigraniComp.includes('5') && !odigranaPolja.includes('9')){
            random = 9
        }
        else if(odigraniComp.includes('1') && odigraniComp.includes('9') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniComp.includes('5') && odigraniComp.includes('9') && !odigranaPolja.includes('1')){
            random = 1
        }
        else if(odigraniComp.includes('3') && odigraniComp.includes('5') && !odigranaPolja.includes('7')){
            random = 7
        }
        else if(odigraniComp.includes('3') && odigraniComp.includes('7') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniComp.includes('5') && odigraniComp.includes('7') && !odigranaPolja.includes('3')){
            random = 3
        } 
        
        /// brani se
        else if(odigraniUser.includes('1') && odigraniUser.includes('2') && !odigranaPolja.includes('3')){
            random = 3
        }
        else if(odigraniUser.includes('2') && odigraniUser.includes('3') && !odigranaPolja.includes('1')){
            random = 1
        }
        else if(odigraniUser.includes('1') && odigraniUser.includes('3') && !odigranaPolja.includes('2')){
            random = 2  
        }
        else if(odigraniUser.includes('1') && odigraniUser.includes('4') && !odigranaPolja.includes('7')){
            random = 7
        }
        else if(odigraniUser.includes('4') && odigraniUser.includes('7') && !odigranaPolja.includes('1')){
            random = 1  
        }
        else if(odigraniUser.includes('1') && odigraniUser.includes('7') && !odigranaPolja.includes('4')){
            random = 4 
        }
        else if(odigraniUser.includes('2') && odigraniUser.includes('5') && !odigranaPolja.includes('8')){
            random = 8
        }
        else if(odigraniUser.includes('5') && odigraniUser.includes('8') && !odigranaPolja.includes('2')){
            random = 2
        }
        else if(odigraniUser.includes('2') && odigraniUser.includes('8') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniUser.includes('3') && odigraniUser.includes('6') && !odigranaPolja.includes('9')){
            random = 9
        }
        else if(odigraniUser.includes('3') && odigraniUser.includes('9') && !odigranaPolja.includes('6')){
            random = 6
        }
        else if(odigraniUser.includes('6') && odigraniUser.includes('9') && !odigranaPolja.includes('3')){
            random = 3
        }
        else if(odigraniUser.includes('4') && odigraniUser.includes('5') && !odigranaPolja.includes('6')){
            random = 6
        }
        else if(odigraniUser.includes('4') && odigraniUser.includes('6') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniUser.includes('5') && odigraniUser.includes('6') && !odigranaPolja.includes('4')){
            random = 4
        }   
        else if(odigraniUser.includes('7') && odigraniUser.includes('8') && !odigranaPolja.includes('9')){
            random = 9
        }
        else if(odigraniUser.includes('7') && odigraniUser.includes('9') && !odigranaPolja.includes('8')){
            random = 8
        }
        else if(odigraniUser.includes('8') && odigraniUser.includes('9') && !odigranaPolja.includes('7')){
            random = 7
        }
        else if(odigraniUser.includes('1') && odigraniUser.includes('5') && !odigranaPolja.includes('9')){
            random = 9
        }
        else if(odigraniUser.includes('1') && odigraniUser.includes('9') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniUser.includes('5') && odigraniUser.includes('9') && !odigranaPolja.includes('1')){
            random = 1
        }
        else if(odigraniUser.includes('3') && odigraniUser.includes('5') && !odigranaPolja.includes('7')){
            random = 7
        }
        else if(odigraniUser.includes('3') && odigraniUser.includes('7') && !odigranaPolja.includes('5')){
            random = 5
        }
        else if(odigraniUser.includes('5') && odigraniUser.includes('7') && !odigranaPolja.includes('3')){
            random = 3
        }
        else if(odigraniUser.includes('1') && odigraniUser.includes('9') && !odigranaPolja.includes('4')){
            random = 4
        }
        else if(odigraniUser.includes('3') && odigraniUser.includes('7') && !odigranaPolja.includes('4')){
            random = 4
        }
        else if(!odigranaPolja.includes('5')){
            random = 5
        }
        // else if(!odigranaPolja.includes('2')){
        //     random = 2;
        // }
        
        // else if(!odigranaPolja.includes('4')){
        //     random = 4;
        // }
        
        // else if(!odigranaPolja.includes('6')){
        //     random = 6;
        // }
        
        // else if(!odigranaPolja.includes('8')){
        //     random = 8;
        // }
        else if (!odigranaPolja.includes('1')){
            random = 1
        }
        else if (!odigranaPolja.includes('1')){
            random = 9
        }
        else if (!odigranaPolja.includes('1')){
            random = 7
        }
        else if (!odigranaPolja.includes('1')){
            random = 3
        }
        else{
            random = Math.floor(Math.random() * 9) + 1
            do {
                random = Math.floor(Math.random() * 9) + 1
            } while (odigranaPolja.includes(String(random)))

        }
      
        odigranaPolja.push(String(random))
        document.getElementById(random).innerText += 'o'
        odigraniComp.push(String(random))
        CheckComp()
    }


    var makeMove = (e) => {
        if (odigranaPolja.length !== 10) {
            if(odigranaPolja.includes(String(e.target.id))){

            }
            else{
                e.target.innerText = 'x'
                odigranaPolja.push(e.target.id)
                odigraniUser.push(e.target.id)
                CheckUser()
                if (odigranaPolja.length < 9) {
                    computerMove()
                }
            }
            
        }
        else { }
    }

    // useEffect(()=>{
    //     computerMove()
    // }, [])
    return (
        <div className='gamePage'>
            <div className="gameDiv">
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="1"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="2"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="3"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="4"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="5"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="6"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="7"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="8"></div>
                <div onClick={(e) => makeMove(e)} className="gridDiv" id="9"></div>
            </div>
        </div>
    )
}
