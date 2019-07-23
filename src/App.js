import React, {useState, useEffect} from 'react';
import Auth from './auth/Auth';
//import Home from './home/Home';
import NavBar from './navbar/NavBar';
import MyRoute from './MyRoute';
import {BrowserRouter} from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');
  const [currentList, setCurrentList] = useState([])

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (userData) => {
    localStorage.setItem('token', userData.sessionToken);
    setSessionToken(userData.sessionToken);
    console.log(userData)
    setCurrentList(userData.user.podcastURL);
    console.log(userData.user.podcastURL);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? <MyRoute sessionToken={sessionToken} currentList={currentList} setCurrentList={setCurrentList}
    /> : <Auth updateToken={updateToken} sessionToken={sessionToken}/>)
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar clearToken={clearToken}/> 
        {protectedViews()}
      </div>
    </BrowserRouter>
  );
}

export default App;
