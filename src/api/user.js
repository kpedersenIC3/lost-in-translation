import { createHeaders } from "./index"

//use global API URL
const apiUrl = process.env.REACT_APP_API_URL


//function that checks if user exists
export const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if(!response.ok){
            throw new Error('could not complete request')
        }
        const data = await response.json()
        return [null, data]
    }
    catch(error) {
        return [error.message, []]
    }
    
}
//function that creates user if user doesn't exist
export const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl,{
            method:'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations:[]
            })
        })
        if(!response.ok){
            throw new Error(`could not create user with username `+ username)
        }
        const data = await response.json()
        return [null, data]
    }
    catch(error) {
        return [error.message, []]
    }
}

//function to update user on API on logout
export const updateUser = async (userId,currentUser) => {
     try {
         const response = await fetch(`${apiUrl}/${userId}`,{
             method:'PATCH',
             headers: createHeaders(),
             body: JSON.stringify({
                translations:currentUser.translations,
             })
         })
         if(!response.ok){
             throw new Error(`could not update user with username `+ currentUser.username)
         }
         const data = await response.json()
         return [null, data]
     }
     catch(error) {
         return [error.message, []]
     }
 }


//function that logs in user from startpage
export const loginUser = async (username)=>{
    const [checkError, user] = await checkForUser(username)

    if(checkError !==null){
        return [checkError, null]
        
    }
    if (user.length > 0){
        //user does not exist
        return [null, user.pop()]
    }

    //const [createError, newUser] = createUser(username)
    return await createUser(username)

}