import { useState, useEffect } from "react";
import './CoreGame.css'
function CoreGame() {
    const [ number, setNumber ] = useState(1)
    const [ addNumber, setAddNumber ] = useState(1)
    const [ numberPercent, setNumberPercent ] = useState(0)
    const [ numberAddPrice, setAddNumberPrice ] = useState(5);
    const [ percentPrice, setPercentPrice ] = useState(10);
    const [ total, setTotal ] = useState(1);


    const [ invervalID, setInvervalID ] = useState(null);

    function numberCreator(){
        if(numberPercent > 0){
            setNumber( prevNumber => (prevNumber + addNumber) + ((numberPercent / 100) * addNumber))
            setTotal(prev => (prev + number))
        }else{
        setNumber(prevNumber => prevNumber + addNumber);
        setTotal(prev => (prev + number));
        
        }
       
    }
    function startGame() {
         setInvervalID( setInterval(numberCreator, 1000))
         
    }

    function addToNumber(){
        if( numberAddPrice <= number ){
        setAddNumber(prev => prev + 1);
        setNumber(prev => (prev - numberAddPrice))
        setAddNumberPrice(prev => (prev / .66))
        
        clearInterval(invervalID);
        startGame();
        }else{
            return null
        }
    }

    function addPercent(){
        if( percentPrice <= number ){
        setNumberPercent(prevPercent => prevPercent + 5)
        setNumber(prev => (prev - percentPrice))
        setPercentPrice(prev => (prev / .6))
        clearInterval(invervalID);
        startGame();
        }else{
            return null;
        }
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
        <div className="big-number">
            <h3 className="number-display">{Math.floor(number)}</h3>
        </div>
        <div className="first-row">
            <div className="add-one" onClick={()=>{addToNumber()}}>
                <div>
                    <p>Add {addNumber} additonal per second</p>
                    <p>Price: {Math.floor(numberAddPrice)}</p>
                </div>
                
            </div>
            <div className="add-one" onClick={()=>{addPercent()}}>
                <p>Add + {numberPercent + 5}% to total increase</p>
                <p>Price: {Math.floor(percentPrice)}</p>
            </div>
        </div>
        <footer className="core-footer">
            {/* <h4>Total Number Generated: {total.toFixed(0)}</h4> */}
        </footer>
    </div>
    )
}

export default CoreGame;