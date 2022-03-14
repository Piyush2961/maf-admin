import React , {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Searchbar/Searchbar";
import AllCards from "./components/AllCards/AllCards";
import Loader from './components/Loader/Loader'
import AllUsers from './components/AllUsers/AllUsers';
import AddItem from './components/AddItem/AddItem';
import Login from './components/Login/Login';
export default function App() {

   
  const [showLoader, setLoader] = useState(false);
  const [swaphomeAndUsers, setSwaphomeAndUsers] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  const [showLogin, setShowLogin] = useState(true);


  const signin = (email,password) =>{
    setLoader(true);
    const axios = require('axios');
    const data = JSON.stringify({
     email,
     password
    });

    const config = {
      method: 'post',
      url: 'https://maf-admin-api.herokuapp.com/api/users/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if(response.data.status === 'success' && response.data.role === 'admin'){
        localStorage.setItem('token',response.data.token);
        setLoader(false);
        setShowLogin(false);
      }
      else{
        setLoader(false);
        alert('Invalid Admin Credentials');
      }

    })
    .catch(function (error) {
      console.log(error);
      alert(error.message)
    });

  }

  const logouthandler = () =>{
    localStorage.removeItem('token');
    setShowLogin(true);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setShowLogin(false);
    }
  }, []);
    

  return (
    <div className="App">
      {showLoader? <Loader />: ""}
     { showLogin? <Login signin={signin}/>: (
       <>
      {showAddItem ? <AddItem setShowAddItem={setShowAddItem} setLoader={setLoader}/> : null }
      <Navbar setSwaphomeAndUsers={setSwaphomeAndUsers} setShowAddItem={setShowAddItem} logouthandler={logouthandler}/>
      {swaphomeAndUsers? <AllUsers />: <AllCards setLoader={setLoader}/>}
      </>
      )
      }
    </div>
  );
}

