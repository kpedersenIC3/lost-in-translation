import { useState, useEffect } from "react"
import TranslateTranslation from "./TranslateTranslation.js"
const TranslateUserInput = () => {

    const [userinput, setUserInput] = useState('')
    let [buttonPushed, setButtonPushed] = useState(false)
    let [letterArray, setLetterArray] = useState([])


    const handleOnChange = (event) => {
        setUserInput(event.target.value)
        letterArray.length = 0
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
        console.log("buttoninhandleonclick",buttonPushed)
    }
    //THIS NEEDS TO BE RERUN ON RETRANSLATION
    let translate = letterArray.map((letter)=>{
        console.log("buttonintranslate",buttonPushed) 
        return(
            <div>
                <TranslateTranslation letter={letter} setButtonPushed={setButtonPushed}/>
            </div>
        )
    })
    

    useEffect(()=>{
        //onmounted
        console.log("parent mounted")
        return () => {
            console.log("parent unmounted")
        }
    },[])

    return(
        <>
        <img className="img-logo" src={process.env.PUBLIC_URL + "Logo-Hello.png"} alt="Image of a hand"></img>
        <div className="translate-input">
        <input type="text" onChange={ handleOnChange } placeholder="Enter word or sentence..."></input>
        <button className="translate-button" onClick={ handleOnClick }>{String.fromCharCode(8594)}</button>
        </div>
        
        <div className="translate-box">
            {/* {buttonPushed ? translate : null} */}
            {translate}
        </div>
        </>

    )

}

export default TranslateUserInput