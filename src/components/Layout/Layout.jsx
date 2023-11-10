import { Outlet, Link } from "react-router-dom";
import SamsungLogo from "../assets/icons/samsungLogo.svg";
import AppleLogo from "../assets/icons/appleLogo.svg";
import React from "react";
import styles from "./Layout.module.scss";
import Hotline from "../assets/icons/hotline.svg";
import Person from "../assets/icons/person.svg";
const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbarLeftSide}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLinks} to="/campaigns">
              Kampaniyalar
            </Link>
          </li>
          <li>
            <Link className={styles.navLinks} to="/shops">
              Maqazalar
            </Link>
          </li>
          <li>
            <Link className={styles.navLinks} to="/corporate">
              Korporativ
            </Link>
          </li>
          <li>
            <Link to="/samsung">
              <img className={styles.samsungLogo} src={SamsungLogo} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/apple">
              <img className={styles.appleLogo} src={AppleLogo} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/outlet">
              <button>Outlet</button>
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <div className={styles.navbarRightSide}>
        <div>
          <img className={styles.hotlineImg} src={Hotline} alt="" />
        </div>
        <hr style={{ height: "25px" }} />
        <div>
          <select style={{ marginRight: "10px", marginLeft: "10px" }}>
            <option value="Aze">Azərbaycan dili</option>
            <option value="Eng">İngilis dili</option>
          </select>
        </div>
        <hr style={{ height: "25px" }} />
        <div>
          <Link className={styles.profileLink}>
            <img src={Person} alt="" />
            Şəxsi kabinet
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
