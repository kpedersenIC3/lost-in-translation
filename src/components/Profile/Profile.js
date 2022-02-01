import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserAPI } from "../../App"
import Header from "../Header"
import { updateUser } from "../../api/user"


const ProfileP = () => {
    //use context
    let currentUser = useContext(UserAPI)
    //initiate navigator
    const navigator = useNavigate()


    //moves to translate page on click
    const gotoTranslate = () => {
        navigator("/translate")
      }

    //clears translations array on click
    const handleClearButtonClicked = () => {
        while(currentUser.translations.length > 0){
            currentUser.translations.pop()
        }
        navigator("/profile")
    }

    //handles user logout
    const handleLogOut = () => {
        //update API
        updateUser(currentUser.id, currentUser)
        //reset to default user
        currentUser.loggedIn = false
        currentUser.id = 0
        currentUser.username = ""
        currentUser.translations = []
        //go to startpage
        navigator('/')
    }

    return(
        <>
        <Header/>
        <h1 className="profile-title">Latest Translations:</h1>
        <div className="profile-box">
        <ol className="profile-list">
            {currentUser.translations.map(word=><li key={word}>{word}</li>)}
        </ol>
        <button className="profilepage-button" id="clear" onClick={ handleClearButtonClicked }>Clear</button>
        <button className="profilepage-button" id="translate" onClick={gotoTranslate}>Back to translations</button>
        </div>
        
        <button className="profilepage-button" id="logout" onClick={handleLogOut}>Log out</button>
        </>
    )
}

export default ProfileP