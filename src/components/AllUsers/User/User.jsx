import React from 'react'
import styles from './User.module.css'
import user from './../../Images/user.svg'
import edit from './../../Images/edit.svg'
import del from './../../Images/delete.svg'

const User = () => {
  return (
    <div className={styles.main}>
        
        <div className={styles.image}>
           <img src={user} alt="" style={{ width: "100%" , height: "100%"}} />
        </div>

        <div className={styles.name}>
              <p>Piyush Kumar</p>
        </div>

        <div className={styles.email}>
              <p>piyushkumar2961@gmail.com</p>
        </div>
        
        <div className={styles.editandDel}>
 
            <div className={styles.edit}>
            <img src={edit} alt="" style={{ width: "100%" , height: "100%"}} />
            </div>

            <div className={styles.delete}>
            <img src={del} alt="" style={{ width: "100%" , height: "100%"}} />
            </div> 
 
        </div>

       

    </div>
  )
}

export default User