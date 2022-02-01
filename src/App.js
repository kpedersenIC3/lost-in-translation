import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Translate from './components/Views/Translate'
import StartPage from './components/Views/StartPage'
import ProfilePage from './components/Views/ProfilePage'
import { createContext } from 'react';

//create contexts
export const LoggedIn = createContext()
export const UserAPI = createContext()

//make a default user to be updated on login
let currentUser = {id:0,username:"",translations:[],loggedIn:false}



function App() {
  return (
        <UserAPI.Provider value={currentUser}>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path='/' element={<StartPage />} />
              <Route path='/translate' element={<Translate />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Routes>
          </div>
        </BrowserRouter>
        </UserAPI.Provider> 
  );
}



export default App;
