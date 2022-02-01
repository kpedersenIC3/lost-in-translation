import LoginForm from "../Users/LoginForm";
import { useContext, useEffect} from "react";
import { UserAPI } from "../../App";
import { useNavigate } from "react-router-dom";


//import React from "react";

const StartPage = () => {

  let currentUser = useContext(UserAPI)
  const navigator = useNavigate()
  //check on mount if user is loggedin
  useEffect(()=>{
    //if alreadu logged in go straight to translate page
    if(currentUser.loggedIn){
      navigator("/translate")
    }
},[])
  return (
    <div className="start-page">
      <LoginForm/>
    </div>
  );
};

export default StartPage;
