import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in
      } else {
        //user is logged out
      }
    })
  })

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (

      <div className="app__body">
        <Sidebar />

        <Feed />
      
        {/* Widgets */}
      </div>

      )}


      

    
    </div>
  );
}

export default App;
