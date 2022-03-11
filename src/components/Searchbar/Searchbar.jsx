import React , {useState} from "react";
import styles from "./Searchbar.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

const Searchbar = ({click , reset}) => {
  const [val,setVal]=useState("");
  const Reset = () =>{
    setVal("");
    reset();
  }
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.search}>
          <input type="text" placeholder="Enter Product Name" onChange={(e)=> setVal(e.target.value)} value={val}/>
            <IoCloseSharp style={{ fontSize: "1.5rem" , transform: "translateY(50%)", cursor: "pointer"}} onClick={Reset}/>
          <div className={styles.searchicon} onClick={()=>click(val)}>
            <BiSearchAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
