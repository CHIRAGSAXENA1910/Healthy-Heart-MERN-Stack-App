import './App.css';

import {Route,Routes } from 'react-router-dom';
import Main from './Main';
import Profile from './components/Profile/client/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/join' element={<Profile/>}/>
    </Routes>
  );
}
export default App;
