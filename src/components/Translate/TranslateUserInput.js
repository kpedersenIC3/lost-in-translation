import { useState, useEffect } from "react"
import TranslateTranslation from "./TranslateTranslation.js"

const TranslateUserInput = () => {

    const [userinput, setUserInput] = useState('')
    const [buttonPushed, setButtonPushed] = useState(false)
    const [letterArray, setLetterArray] = useState([])
    //Test commentary


    const handleOnChange = (event) => {
        setUserInput(event.target.value)
    }
    const handleOnClick = () => {
        setButtonPushed(true)
        let id = 0
        for(let letter of userinput){
            let letterObject = {}
            letterObject["id"] = id
            letterObject["letter"] = letter
            letterArray.push(letterObject)
            id++
        }

        console.log("letterArray",letterArray)

    }

    const translate = letterArray.map((letter)=>{
        return(
            <div>
            <TranslateTranslation letter={letter} />
            </div>
        )
    })



    

    return(
        <>
        <div className="translate-input">
        <input type="text" onChange={ handleOnChange } placeholder="Enter word or sentence..."></input>
        <button onClick={ handleOnClick }>Translate</button>
        </div>
        
        <div className="translate-box">
            <div className="sign-flex">
            {buttonPushed ? translate : null}
            </div>
        </div>
        </>

    )

}

export default TranslateUserInput