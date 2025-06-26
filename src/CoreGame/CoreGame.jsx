import { useState, useEffect } from "react";
import './CoreGame.css'
function CoreGame() {
    const [ number, setNumber ] = useState(1)
    const [ addNumber, setAddNumber ] = useState(0)
    const [ numberPercet, setNumberPercent ] = useState(0)

    function numberCreator(){
        setNumber(number + addNumber)
    }
    return(
    <div>
        
        <div className="intro-text">
            <h3>Let the games begin. This game is quite simple if you like Idle Games. All you have to do is sit back and watch a number get bigger. Well that could be a little boring, but what if, we allow you to buy upgrades to increase how fast that number goes up? Do I have you attention now? </h3>
        </div>
        <br />
            <h3>{number}</h3>
        <div className="first-row">
            <div className="add-one">
                <p>Add {addNumber +1} additonal per second</p>
                <p></p>
            </div>
            <div className="add-one">
                <p>Add a certain percent total increase</p>
            </div>
        </div>
    </div>
    )
}

export default CoreGame;