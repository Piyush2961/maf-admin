import { MdOutlineKeyboardArrowDown } from "react-icons/all";
import create from "./../Images/add.svg"
import users from "./../Images/users.svg"
import home from "./../Images/home.svg"
import logout from "./../Images/logout.svg"
import styles from "./Navbar.module.css";
const Navbar = ({setSwaphomeAndUsers}) => {
  return (
    <div className={styles.heading}>
       &nbsp;
      <div className={styles.nav}>
        <div className={styles.firstnav}>
          <h1>
            Welcome Piyush <span>🎉</span>
          </h1>
          <p>
            Manage your Items Here &nbsp;
            <MdOutlineKeyboardArrowDown
              style={{ transform: "translateY(20%)", fontSize: "1.3rem" }}
            />
          </p>
        </div>

        <div className={styles.center}>
          <div className={styles.upHome} onClick={()=>setSwaphomeAndUsers(false)}>
             <img src={home} className={styles.home} />
             <p>HOME</p>
          </div>

          <div className={styles.upUsers} onClick={()=>setSwaphomeAndUsers(true)}>
             <img src={users} className={styles.users} />
             <p>USERS</p>
          </div>

          <div className={styles.upAdd}>
             <img src={create} className={styles.add} />
             <p>ADD ITEM</p>
          </div>

          <div className={styles.upLogout}>
             <img src={logout} className={styles.logout} />
             <p>LOGOUT</p>
          </div>
        </div>

        <div className={styles.secondnav}>
        
          <img
            className={styles.profileicon}
            src="https://www.automotiveone.com/wp-content/uploads/2019/02/placeholder-user-image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
