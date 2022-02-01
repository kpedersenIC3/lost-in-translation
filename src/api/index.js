const apiKey = process.env.REACT_APP_API_KEY
//Function that creates headers for API communication
export const createHeaders = () => {
    console.log("in headers function and doing stuff with api")
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }

}
