import React , {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Searchbar/Searchbar";
import AllCards from "./components/AllCards/AllCards";
import Loader from './components/Loader/Loader'
export default function App() {

   
  const [showLoader, setLoader] = useState(false);

  return (
    <div className="App">
      {showLoader? <Loader />: ""}
      <Navbar />
      <AllCards setLoader={setLoader}/>
    </div>
  );
}

