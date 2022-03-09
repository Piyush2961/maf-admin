import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";
import styles from "./AllCards.module.css";
import Search from './../Searchbar/Searchbar'
import NothingFound from "../NothingFound/NothingFound";
const AllCards = () => {
  const [productList, updateList] = useState(0);

  const [useSearch, resetSearch] = useState(0);
    const [category, setCategory] = useState(0);
    
    const onClickCategory = (val) =>{
          const data = productList.filter((el)=>{
            return (el.category).toLowerCase().includes(val.toLowerCase())
          })

          console.log(data);
        setCategory(data);
    }

    const reset = () =>{
      setCategory(0);
    }

  useEffect(() => {
    const axios = require("axios");

    const config = {
      method: "get",
      url: "https://fakestoreapi.com/products",
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        updateList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
    <Search click={onClickCategory} reset={reset}/>
    {
   
   category ? (category.length ?<div className={styles.allcards}>
   {category &&
     category.map((el) => (
       <Card
         name={el.title}
         image={el.image}
         rating={el.rating.rate}
         price={el.price}
         count={el.rating.count}
       />
     ))}

  
 </div>: <NothingFound />):  
    (<div className={styles.allcards}>
      {productList &&
        productList.map((el) => (
          <Card
            name={el.title}
            image={el.image}
            rating={el.rating.rate}
            price={el.price}
            count={el.rating.count}
          />
        ))}

    </div>)

        }
    </>
  );
};

export default AllCards;
