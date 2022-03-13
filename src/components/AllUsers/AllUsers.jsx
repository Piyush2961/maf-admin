import React , {useEffect , useState} from 'react'
import styles from './AllUsers.module.css'
import User from './User/User'
import Loader from '../Loader/Loader'
import EditUser from './EditUser/EditUser'

const AllUsers = () => {
     
    const [users , setUsers] = useState([])
    const [loading , setLoading] = useState(true)
    const [editOpen , setEditOpen] = useState(false)

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [id , setId] = useState('')

    const axios = require('axios');

    const getAllData =() =>{

      const config = {
      method: 'get',
      url: 'https://maf-admin-api.herokuapp.com/api/users',
      };

      axios(config)
      .then(function (response) {
      const users = response.data.data.users
      setUsers(users)
      setLoading(false)
      })
      .catch(function (error) {
      console.log(error);
      });
    }

     
    useEffect(() => {   
           getAllData()
    }, [])
    

    const deleteUser = (id) =>{
      setLoading(true)
      const config = {
        method: 'delete',
        url: `https://maf-admin-api.herokuapp.com/api/users/${id}`,
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setLoading(false)
        getAllData()
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
        getAllData()
      });

    }

   const editUser = (name , email , id) =>{

      setLoading(true)
    
        const data = JSON.stringify({
          name,
          email
        });
        
        const config = {
          method: 'patch',
          url: `https://maf-admin-api.herokuapp.com/api/users/${id}`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          closeEdit()
          setLoading(false)
          getAllData()
        })
        .catch(function (error) {
          console.log(error);
          closeEdit()
          setLoading(false)
          getAllData()
        });
         
   }
   
   const setEdit = (name , email , id) =>{
    setName(name)
    setEmail(email)
    setId(id)
    setEditOpen(true)
   }

    const closeEdit = () =>{
      setEditOpen(false)
    }

  return (
    <div className={styles.main}>
        {loading?<Loader /> : null}
        {editOpen ? <EditUser name={name} email={email} id={id} closeEdit={closeEdit} editUser={editUser} /> : null }
        <h1>Manage All Users</h1>
        {
          users.map((el)=><User name={el.name} email={el.email} id={el._id} deleteUser={deleteUser} editUser={editUser} setEdit={setEdit}/>)
        }
        
    </div>
  )
}

export default AllUsers