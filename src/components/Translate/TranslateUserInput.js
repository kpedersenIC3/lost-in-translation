import { useState, useContext } from "react"
import TranslateTranslation from "./TranslateTranslation.js"
import Header from "../Header.js"
import { UserAPI } from "../../App"

const TranslateUserInput = () => {
    //create states to be used
    const [userinput, setUserInput] = useState('')
    let [buttonPushed, setButtonPushed] = useState(false)
    let [letterArray, setLetterArray] = useState([])
    //use context
    let currentUser = useContext(UserAPI)

    //get user input
    const handleOnChange = (event) => {
        setUserInput(event.target.value)
        letterArray.length = 0
    }

    //translate into signs on click
    const handleOnClick = () => {
        const translationLength = 40

        //make sure sentence is less than 40 characters
        if(userinput.length <= translationLength){
            setButtonPushed(true)
            let id = 0
            for(let letter of userinput){
                let letterObject = {}
                letterObject["id"] = id
                letterObject["letter"] = letter
                letterArray.push(letterObject)
                id++
            }

            //Update translations array (max 10 allowed, first in first out):
            if(currentUser.translations.length > 9){
                currentUser.translations.shift()
            }
            currentUser.translations.push(userinput)
            console.log("translations:", currentUser.translations)
        }
        //alert user if sentence is too long
        else{
            window.alert(`Please keep the translation under ${translationLength} letters`)
        }
    }
    //map letter to print corresponding signs
    let translate = letterArray.map((letter)=>{
        return(
            <>
                <TranslateTranslation letter={letter} setButtonPushed={setButtonPushed}/>
            </>
        )
    })
    

    return(
        <>
        <Header />
        <div className="translate-input">
        <input type="text" onChange={ handleOnChange } placeholder="Enter word or sentence..."></input>
        <button className="translate-button" onClick={ handleOnClick }>{String.fromCharCode(8594)}</button>
        </div>
        
        <div className="translate-box">
            {translate}
            <div className="translate-minibox">Translation</div>
        </div>
        
        </>

    )

}

export default TranslateUserInput