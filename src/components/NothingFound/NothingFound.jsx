import React from 'react'
import image from "./../Images/nothingfound.webp"
import styles from "./NothingFound.module.css"

const NothingFound = () => {
  return (
      <div className={styles.uppernothing}>
        
         <img src={image} alt="" className={styles.image}/>
    
    <p style={{ fontSize: "2rem" , fontWeight: "600"}}>Nothing Found</p>
    <h2 style={{ color: "#8c8c8c" }} >We couldn't find what you were looking for</h2>
    <h4 style={{ color: "#9e9e9e" }} > keep calm and search again. We have so many other product that you will like!</h4>
      </div>
  )
}

export default NothingFound