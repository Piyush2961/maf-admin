import React , {useEffect , useState} from 'react'
import styles from './AllUsers.module.css'
import User from './User/User'
import Loader from '../Loader/Loader'
import axios from 'axios'

const AllUsers = () => {
     
    const [users , setUsers] = useState([])
    const [loading , setLoading] = useState(true)

     
    useEffect(() => {   
        
            const axios = require('axios');

            const config = {
            method: 'get',
            url: 'https://maf-admin-api.herokuapp.com/api/users',
            };

            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });

        

    }, [])


  return (
    <div className={styles.main}>
        {loading?<Loader /> : null}
        <h1>Manage All Users</h1>
        <User />
        <User />
        <User />
    </div>
  )
}

export default AllUsers