import React from "react";
import styles from "./Card.module.css";
import { FaRupeeSign } from "react-icons/all";
import { ImBin } from "react-icons/all";
import { BsPencilFill } from "react-icons/all";
const Card = ({ name, image, rating, price, brand , tag , id , type , openEdit, deletItem}) => {
  return (
    <div className={styles.maincard}>
      <div className={styles.innercard}>
        <div className={styles.innerheader}>
         <BsPencilFill className={styles.edit} onClick={()=>openEdit(name, price, brand, type, tag, rating, id) }/>
         <ImBin className={styles.delete} onClick={()=>deletItem(id)}/>
        </div>
        <div className={styles.rating}>
          <p>{rating}</p>
        </div>
       
       <div className={styles.tag}>
            <p style={{ color: "white" , fontSize: ".7rem", fontWeight: "600"}}>{tag}</p>
       </div>

        <div className={styles.image}>
          <img src={image} alt="" width="100%" height="100%" style={{ objectFit: "contain" }}/>
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
            
            <span
              style={{
                background: "red",
                color: "white",
                padding: ".3rem",
                borderRadius: ".5rem"
              }}
            >
              {brand}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
