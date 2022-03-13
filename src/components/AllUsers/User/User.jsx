import React from 'react'
import styles from './User.module.css'
import user from './../../Images/user.svg'
import edit from './../../Images/edit.svg'
import del from './../../Images/delete.svg'
import EditUser from '../EditUser/EditUser'

const User = ({name , email , id , deleteUser , editUser , setEdit}) => {
  
  return (
    
    <div className={styles.main}>
        
        <div className={styles.image}>
           <img src={user} alt="" style={{ width: "100%" , height: "100%"}} />
        </div>

        <div className={styles.name}>
              <p>{name}</p>
        </div>

        <div className={styles.email}>
              <p>{email}</p>
        </div>
        
        <div className={styles.editandDel}>
 
            <div className={styles.edit} onClick={()=>setEdit(name , email , id)}>
            <img src={edit} alt="" style={{ width: "100%" , height: "100%"}} />
            </div>

            <div className={styles.delete} onClick={()=>deleteUser(id)}>
            <img src={del} alt="" style={{ width: "100%" , height: "100%"}} />
            </div> 
 
        </div>

       

    </div>

  )
}

export default User