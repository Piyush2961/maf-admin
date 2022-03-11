import React from "react";
import styles from "./Card.module.css";
import { FaRupeeSign } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { BsPencilFill } from "react-icons/bs";
import Bin from './../Images/bin.svg'
const Card = ({ name, image, rating, price, count }) => {
  return (
    <div className={styles.maincard}>
      <div className={styles.innercard}>
        <div className={styles.innerheader}>
         <BsPencilFill className={styles.edit}/>
         <ImBin className={styles.delete}/>
        </div>
        <div className={styles.rating}>
          <p>{rating}</p>
        </div>
       
       <div className={styles.tag}>
            <p style={{ color: "white" , fontSize: ".7rem", fontWeight: "600"}}>Trending</p>
       </div>

        <div className={styles.image}>
          <img src={image} alt="" width="100%" height="100%" />
        </div>

        <div className={styles.productName}>
          <h4>{name}</h4>
        </div>

        <div className={styles.nextName}>
          <div className={styles.productprice}>
            <FaRupeeSign />
            <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              {price}
            </span>
          </div>

          <div className={styles.productcount}>
            <span style={{ fontWeight: "600" }}>{count}</span>{" "}
            <span
              style={{
                background: "red",
                color: "white",
                padding: ".3rem",
                borderRadius: ".5rem"
              }}
            >
              LEFT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
