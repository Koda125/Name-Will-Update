import { useState, useEffect } from "react";
import './CoreGame.css'
function CoreGame() {
    const [ number, setNumber ] = useState(1)
    const [ addNumber, setAddNumber ] = useState(1)
    const [ numberPercent, setNumberPercent ] = useState(0)


    const [ invervalID, setInvervalID ] = useState(null);

    function numberCreator(){
        if(numberPercent > 0){
            setNumber( prevNumber => (prevNumber + addNumber) + ((numberPercent / 100) * addNumber))
        }else{
        setNumber(prevNumber => prevNumber + addNumber);
        
        }
       
    }
    function startGame() {
         setInvervalID( setInterval(numberCreator, 1000))
         
    }

    function addToNumber(){
        setAddNumber(prev => prev + 1);
        
        clearInterval(invervalID);
        startGame();
    }

    function addPercent(){
        setNumberPercent(prevPercent => prevPercent + 5)
        console.log('Precent was: ', numberPercent)
        clearInterval(invervalID);
        startGame();
    }
    return(
    <div>
        
        <div className="intro-text">
            <h3>Let the games begin. This game is quite simple if you like Idle Games. All you have to do is sit back and watch a number get bigger. Well that could be a little boring, but what if, we allow you to buy upgrades to increase how fast that number goes up? Do I have you attention now? </h3>
        </div>
        <div>
            <button onClick={startGame}>Start the Game!</button>
        </div>
        <br />
            <h3>{Math.floor(number)}</h3>
        <div className="first-row">
            <div className="add-one" onClick={()=>{addToNumber()}}>
                <p>Add {addNumber} additonal per second</p>
                <p></p>
            </div>
            <div className="add-one" onClick={()=>{addPercent()}}>
                <p>Add + {numberPercent + 5}% to total increase</p>
            </div>
        </div>
    </div>
    )
}

export default CoreGame;