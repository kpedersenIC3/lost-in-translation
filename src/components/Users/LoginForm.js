import { useForm } from "react-hook-form"
import { loginUser } from "../../api/user"
import Header from "../Header"
import { useNavigate } from "react-router-dom"
import { UserAPI } from "../../App"
import { useContext } from "react"

//limitations on username
const usernameConfig = {
    required: true,
    minLength: 2
}



const LoginForm = () => {
    //use context
    let currentUser = useContext(UserAPI)
    //initiate navigator
    const navigator = useNavigate()

    //form helper
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    //logs in user from startpage
    const onSubmit = async ({username}) => {
        //checks if username is valid
        const [error, user]= await loginUser(username)
        //update context
        currentUser.id = user.id
        currentUser.username = user.username
        currentUser.translations = user.translations
        currentUser.loggedIn = true
        //navigate to tranlate page if all is ok
        navigator('/translate')
    }
    //warns user on username limitations
    const errorMassage =(()=>{
        if(!errors.username){
            return null
        }

        if(errors.username.type === 'required'){
            return <span>Username is required</span>
        }

        if(errors.username.type === 'minLength'){
            return <span>Username should be more than two characters</span>
        }
    })()
    return (
        <>
            <Header/>
            <h1 className="start-title">Get Started</h1>
            <div className="start-input-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="username"></label>
                        <input
                            type="text"
                            placeholder="What's your name..."
                            {...register("username", usernameConfig)}/>
                            {errorMassage}
                    <button className="login-button" type="submit">{String.fromCharCode(8594)}</button>
                </form>
            </div>
        </>
    )
}
export default LoginForm