import React from 'react'
import styles from './EditCard.module.css'

const EditCard = () => {


      
     const [showItemLoad , setShowItemLoad] = useState(false)
     const [showBtn, setShowBtn] = useState(true)
     const [showLoaded, setShowLoaded] = useState(false)
     const [showInput, setShowInput] = useState(true)

     const [photo, setPhoto] = useState(null)
     const [name, setName] = useState('')
     const [price, setPrice] = useState('')
     const [brand, setBrand] = useState('')
     const [type, setType] = useState('')
     const [tag, setTag] = useState('')
     const [rating, setRating] = useState('')




  return (
    <div className={styles.addupper}>

    <div className={styles.addinner}>
 
          <h1>Edit Item</h1>
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
             <h3>brand : </h3>
             <input type="text" onChange={(e)=>setBrand(e.target.value)}/>
          </div>

          <div className={styles.tag}>
             <h3>Tag : </h3>
             <input type="text" onChange={(e)=>setTag(e.target.value)}/>
          </div>

          <div className={styles.rating}>
             <h3>Rating : </h3>
             <input type="text" onChange={(e)=>setRating(e.target.value)}/>
          </div>

          {/* <div className={styles.image}>
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
          </div> */}

          <button className={styles.update} onClick={addItem}>
              SUBMIT
         </button>
     

    </div>
       

  </div>
  )
}

export default EditCard