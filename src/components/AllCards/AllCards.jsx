import React, { useEffect, useState } from "react";
import Card from "./../Card/Card";
import styles from "./AllCards.module.css";
import Search from './../Searchbar/Searchbar'
import NothingFound from "../NothingFound/NothingFound";
import EditCard from "../EditCard/EditCard";
const AllCards = ({setLoader}) => {


  const [productList, updateList] = useState("");

  const [useSearch, resetSearch] = useState(0);
  const [category, setCategory] = useState(0);

  // edit user states
  const [editUser, setEditUser] = useState(false)
     const [name, setName] = useState('')
     const [price, setPrice] = useState('')
     const [brand, setBrand] = useState('')
     const [type, setType] = useState('')
     const [tag, setTag] = useState('')
     const [rating, setRating] = useState('')
     const [id, setId] = useState('')

  
   const getAllData = () =>{
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
   }
    
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
  
    getAllData()
   
  }, []);

  const closeEdit = () =>{
    setEditUser(false)
  }

  const doEditCall = (name, price, brand, type, tag, rating, id) =>{

    setLoader(true)    

    const axios = require('axios');
    const data = JSON.stringify({
      name,
      price,
      brand,
      type,
      tag,
      rating,
    });
    
    var config = {
      method: 'patch',
      url: `https://maf-admin-api.herokuapp.com/api/items/${id}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setEditUser(false)
      setLoader(false)
      getAllData()
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message)
      setEditUser(false)
      setLoader(false)
      getAllData()
    });
    
  }

  const openEdit = (name, price, brand, type, tag, rating, id) =>{
        setName(name)
        setPrice(price)
        setBrand(brand)
        setType(type)
        setTag(tag)
        setRating(rating)
        setId(id)

        setEditUser(true)
  }

  const deletItem = (id) =>{
    
    setLoader(true)    

    const axios = require('axios');
    
    const config = {
      method: 'delete',
      url: `https://maf-admin-api.herokuapp.com/api/items/${id}`,
      headers: { 
        'Content-Type': 'application/json'
      },
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setLoader(false)
      getAllData()
    })
    .catch(function (error) {
      console.log(error);
      alert(error.message)
      setLoader(false)
      getAllData()
    });

  }

  return (
    <>
    {editUser ?<EditCard name={name} price={price} brand={brand} type={type} tag={tag} rating={rating} id={id} closeEdit={closeEdit} doEditCall={doEditCall}/> : null}
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
         type={el.type}
         openEdit={openEdit}
         deletItem={deletItem}
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
          type={el.type}
          openEdit={openEdit}
          deletItem={deletItem}
          />
        ))}

    </div>)

        }
    </>
  );
};

export default AllCards;
