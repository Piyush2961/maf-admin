import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";
import styles from "./AllCards.module.css";
import Search from './../Searchbar/Searchbar'
import NothingFound from "../NothingFound/NothingFound";
const AllCards = ({setLoader}) => {


  const [productList, updateList] = useState("");

  const [useSearch, resetSearch] = useState(0);
    const [category, setCategory] = useState(0);
    
    const onClickCategory = (val) =>{
          const data = productList.filter((el)=>{
            return (el.name).toLowerCase().includes(val.toLowerCase()) || (el.brand).toLowerCase().includes(val.toLowerCase())
          })

          console.log(data);
        setCategory(data);
    }

    const reset = () =>{
      setCategory(0);
    }

  useEffect(() => {

    setLoader(true);
    const axios = require("axios");

    const config = {
      method: "get",
      url: "https://maf-admin-api.herokuapp.com/api/items",
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data.items);
        updateList(response.data.data.items);
        setLoader(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoader(false);
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
         name={el.name}
         image={el.img}
         rating={el.rating}
         price={el.price}
         brand={el.brand}
         tag={el.tag}
         id={el._id}
       />
     ))}

  
 </div>: <NothingFound />):  
    (<div className={styles.allcards}>
      {productList &&
        productList.map((el) => (
          <Card
          name={el.name}
          image={el.img}
          rating={el.rating}
          price={el.price}
          brand={el.brand}
          tag={el.tag}
          id={el._id}
          />
        ))}

    </div>)

        }
    </>
  );
};

export default AllCards;
