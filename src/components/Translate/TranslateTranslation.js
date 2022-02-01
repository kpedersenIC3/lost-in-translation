
const TranslateTranslation = (props) => {
    //prints out signs corresponding to each letter of translation
    const {letter} = props
    props.setButtonPushed(false)

    if(letter.letter === " "){
        return(
            <div className="translate-sign" key={letter.id}>
                <img className="img-sign" src={process.env.PUBLIC_URL + "/signs/empty.png"} alt=""></img>
            </div>
        )
    }
    //if space a blank image will be printed
    else{
        return(
            <div className="translate-sign" key={letter.id}>
                <img className="img-sign" src={process.env.PUBLIC_URL + "/signs/" + letter.letter + ".png"} alt=""></img>
            </div>
        )
    }
}


export default TranslateTranslation