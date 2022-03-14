import React , {useState} from 'react'
import styles from './AddItem.module.css'
import close from './../Images/close.svg'
import ItemLoader from '../ItemLoader/ItemLoader'
import tick from './../Images/tick.svg'

const AddItem = ({setShowAddItem, setLoader}) => {

     const [showItemLoad , setShowItemLoad] = useState(false)
     const [showBtn, setShowBtn] = useState(true)
     const [showLoaded, setShowLoaded] = useState(false)
     const [showInput, setShowInput] = useState(true)

     const [photo, setPhoto] = useState(null)
     const [name, setName] = useState('')
     const [price, setPrice] = useState('')
     const [count, setCount] = useState('')
     const [type, setType] = useState('')
     const [tag, setTag] = useState('')
     const [img, setImg] = useState('')
     const [rating, setRating] = useState('')
     

    const addImage = (e) =>{
        e.preventDefault()
        setShowBtn(false)
        setShowItemLoad(true)
        setShowLoaded(false)

        
            const axios = require('axios');
            const FormData = require('form-data');

            var data = new FormData();
            data.append('photo', photo , photo.name);

            var config = {
            method: 'post',
            url: 'https://maf-admin-api.herokuapp.com/api/users/upload',
            data : data
            };

            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            setImg(response.data.url)
            setShowInput(false)
            setShowBtn(false)
            setShowItemLoad(false)
            setShowLoaded(true)
            })
            .catch(function (error) {
            console.log(error);
            alert(error.message)
            setShowBtn(true)
            setShowItemLoad(false)
            setShowLoaded(false)
            });          
    }

    const addItem = (e) =>{
        e.preventDefault()
        setLoader(true)
          const axios = require('axios');
          const data = JSON.stringify({
            name,
            rating,
            price,
            count,
            type,
            tag,
            img
          });

          const config = {
            method: 'post',
            url: 'https://maf-admin-api.herokuapp.com/api/items/',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            setShowAddItem(false)
            setLoader(false)
            setShowInput(false)
          })
          .catch(function (error) {
            console.log(error);
            setShowAddItem(false)
            setLoader(false)
          });

    }

  return (
    <div className={styles.addupper}>

      <div className={styles.addinner}>
   
            <h1>Add New Item</h1>
            <img src={close} alt=""  className={styles.close} onClick={()=>setShowAddItem(false)}/>
            <div className={styles.name}>
               <h3>Name : </h3>
               <input type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className={styles.price}>
               <h3>Price : </h3>
               <input type="text" onChange={(e)=>setPrice(e.target.value)}/>
            </div>

            <div className={styles.type}>
               <h3>Type : </h3>
               <input type="text" onChange={(e)=>setType(e.target.value)}/>
            </div>

            <div className={styles.count}>
               <h3>Count : </h3>
               <input type="text" onChange={(e)=>setCount(e.target.value)}/>
            </div>

            <div className={styles.tag}>
               <h3>Tag : </h3>
               <input type="text" onChange={(e)=>setTag(e.target.value)}/>
            </div>

            <div className={styles.rating}>
               <h3>Rating : </h3>
               <input type="text" onChange={(e)=>setRating(e.target.value)}/>
            </div>

            <div className={styles.image}>
               <h3>Image : </h3>
               <div>
              { (showInput) ?
                  <input type="file" name="" id="photo" onChange={(e)=>setPhoto(e.target.files[0])}/>: null}

                  {
                       (showBtn)?
                        <button type="submit" onClick={addImage}  style={{ borderRadius: ".5rem", fontSize: "1.1rem" , border: "0px solid transparent" , cursor: "pointer"}}>
                        add
                        </button>: null
                  }
                       
                      { (showItemLoad) ? <ItemLoader /> : null}
                       
                       {(showLoaded) ? <h5>UPLOADED</h5> : null}
                       
                  
                

               </div>
            </div>

            <button className={styles.update} onClick={addItem}>
                SUBMIT
           </button>
       

      </div>
         
        {/* <input type="file" name="" id="photo" onChange={(e)=>setPhoto(e.target.files[0])}/>
        <button type="submit" onClick={addImage}>
            add
        </button> */}
    </div>
  )
}

export default AddItem