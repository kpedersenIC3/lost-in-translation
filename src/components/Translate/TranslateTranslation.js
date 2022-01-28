const TranslateTranslation = (props) => {

    const {letter} = props

    return(
        <div className="sign" key={letter.id}>
            <img src={process.env.PUBLIC_URL + "/signs/" + letter.letter + ".png"} alt="Image of a hand"></img>
        </div>
    )
}


export default TranslateTranslation