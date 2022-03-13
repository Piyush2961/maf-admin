import React , {useState} from 'react'
import styles from './EditUser.module.css'
import close from './../../Images/close.svg'
const EditUser = ({name , email , id , closeEdit ,editUser}) => {

    const [newName , setNewName] = useState(name)
    const [newEmail, setNewEmail] = useState(email)

  return (
    <div className={styles.main}>
       <div className={styles.edituser}>
           <h2>Edit DATA</h2>
            <img src={close} alt=""  className={styles.close} onClick={closeEdit}/>
            <div className={styles.name}>
               <h3>Name : </h3>
               <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
            </div>

            <div className={styles.email}>
               <h3>Email : </h3>
               <input type="text" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>
            </div>

           <button className={styles.update} onClick={()=>editUser(newName, newEmail, id)}>
                UPDATE
           </button>

       </div>
    </div>
  )
}

export default EditUser