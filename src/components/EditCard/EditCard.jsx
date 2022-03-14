import React , {useState} from 'react'
import styles from './EditCard.module.css'
import close from './../Images/close.svg'

const EditCard = ({name, price, brand, type, tag, rating, id, closeEdit, doEditCall}) => {

    // console.log(id)
    
     const [newname, setName] = useState(name)
     const [newprice, setPrice] = useState(price)
     const [newbrand, setBrand] = useState(brand)
     const [newtype, setType] = useState(type)
     const [newtag, setTag] = useState(tag)
     const [newrating, setRating] = useState(rating)



  return (
    <div className={styles.addupper}>

    <div className={styles.addinner}>
 
          <h1>Edit Item</h1>
          <img src={close} alt=""  className={styles.close} onClick={closeEdit}/>
          <div className={styles.name}>
             <h3>Name : </h3>
             <input type="text" value={newname} onChange={(e)=>setName(e.target.value)}/>
          </div>

          <div className={styles.price}>
             <h3>Price : </h3>
             <input type="text" value={newprice} onChange={(e)=>setPrice(e.target.value)}/>
          </div>

          <div className={styles.type}>
             <h3>Type : </h3>
             <input type="text" value={newtype} onChange={(e)=>setType(e.target.value)}/>
          </div>

          <div className={styles.count}>
             <h3>Brand : </h3>
             <input type="text" value={newbrand} onChange={(e)=>setBrand(e.target.value)}/>
          </div>

          <div className={styles.tag}>
             <h3>Tag : </h3>
             <input type="text" value={newtag} onChange={(e)=>setTag(e.target.value)}/>
          </div>

          <div className={styles.rating}>
             <h3>Rating : </h3>
             <input type="text" value={newrating} onChange={(e)=>setRating(e.target.value)}/>
          </div>

          <button className={styles.update} onClick={()=>doEditCall(newname, newprice, newbrand, newtype, newtag, newrating, id)}>
              SUBMIT
         </button>
     

    </div>
       

  </div>
  )
}

export default EditCard