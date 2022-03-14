import React , {useState} from 'react'
import './Login.css'
import { MdAdminPanelSettings } from 'react-icons/all';


const Login = ({signin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='upperwrap'>
   
        <form>
        <div id="info-wrapper">
            <span class="brand"><MdAdminPanelSettings /> </span>
            <div class="notification">
            <h1 style={{ }}>ADMIN PANEL</h1>
            <p style={{ marginTop: "1.5rem", fontWeight: "600", wordSpacing: "6px" ,color: "#F0F8FF"}}>Here, you can have admin previliges to make CRUD opeartions in various users and products. One can make a new product and at any point of time , he/she is able to edit or Delete it. Moreover, Admin can edit or delete the credentials of users present in the platform. </p>
            </div>
        </div>
        <div id="form-wrapper">
            <div>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to continue.</p>
            </div>

            <div>
            <div class="input-wrapper">
                <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
                <i class="bx bxs-user-circle"></i>
            </div>

            <div class="input-wrapper">
                <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                <i class="bx bx-key"></i>
            </div>

            <button className='clickonbtn' type="button" onClick={()=>signin(email,password)}>
                Sign In
                <i class='bx bx-right-arrow-alt'></i>
            </button>
            </div>

            <p class="mb-0">
            <a class="default" href="#">Only Admin's are allowed to access this Panel.</a>
            </p>
        </div>
        </form>

    </div>
  )
}

export default Login