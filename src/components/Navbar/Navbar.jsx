import { MdOutlineKeyboardArrowDown } from "react-icons/all";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.nav}>
        <div className={styles.firstnav}>
          <h1>
            Welcome Piyush <span>🎉</span>
          </h1>
          <p style={{ color: "#464647", fontWeight: "500" }}>
            Manage your Items Here &nbsp;
            <MdOutlineKeyboardArrowDown
              style={{ transform: "translateY(20%)", fontSize: "1.3rem" }}
            />
          </p>
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
