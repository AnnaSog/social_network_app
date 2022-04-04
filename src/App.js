import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <section className='nav-content'>
          <Navbar/>
          <div className="content-wrapper">
            <Routes>
              <Route path='/profile' element={<Profile postData={props.post}/>}/>
              <Route path='/dialogs/*' element={<Dialogs dialogData={props.dialog} messageData={props.message}/>}/> 
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  )
}

export default App;
