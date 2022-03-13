import React , {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Searchbar/Searchbar";
import AllCards from "./components/AllCards/AllCards";
import Loader from './components/Loader/Loader'
import AllUsers from './components/AllUsers/AllUsers';
import AddItem from './components/AddItem/AddItem';
export default function App() {

   
  const [showLoader, setLoader] = useState(false);
  const [swaphomeAndUsers, setSwaphomeAndUsers] = useState(false);

  return (
    <div className="App">
      {/* <AddItem /> */}
      {showLoader? <Loader />: ""}
      <Navbar setSwaphomeAndUsers={setSwaphomeAndUsers}/>
      {swaphomeAndUsers? <AllUsers />: <AllCards setLoader={setLoader}/>}
    </div>
  );
}

