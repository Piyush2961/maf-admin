import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Searchbar/Searchbar";
import AllCards from "./components/AllCards/AllCards";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllCards />
    </div>
  );
}

