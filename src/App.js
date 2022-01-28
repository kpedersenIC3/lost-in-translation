import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import Translate from './components/Views/Translate'
import StartPage from './components/Views/StartPage'
import ProfilePage from './components/Views/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/translate' element={<Translate />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
