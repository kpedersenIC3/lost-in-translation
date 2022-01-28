import { useEffect } from "react"
const TranslateTranslation = (props) => {

    const {letter} = props
    props.setButtonPushed(false)

    console.log("well 'ello there this is the child")
    useEffect(()=>{
        //onmounted
        console.log("child mounted")

        return () => {
            console.log("child unmounted")
        }
    },[])


    return(
        <div key={letter.id}>
            <img className="img-sign" src={process.env.PUBLIC_URL + "/signs/" + letter.letter + ".png"} alt=""></img>
        </div>
    )
}


export default TranslateTranslation