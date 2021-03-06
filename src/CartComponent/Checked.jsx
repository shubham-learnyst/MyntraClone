import React, { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import styles from "./checked.module.css";
import { AuthContext } from "../Logincomponent/AuthContext";
import { useSelector } from "react-redux";

export const Checked = () => {
  const { checked, onHandleChange } = useContext(AuthContext);
  const { cart } = useSelector((state) => ({
    cart: state.cart.cart,
  }));

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className={styles.main_div}>
      <div>
        <Checkbox {...label} checked={checked} onChange={onHandleChange} />
        <p className={styles.checkbox_para}>{cart.length} ITEMS SELECTED</p>
      </div>
      <div className={styles.button_div}>
        <button className={styles.button}>REMOVE</button>
        <div className={styles.vertical_line}></div>
        <button className={styles.button}>MOVE TO WISHLIST</button>
      </div>
    </div>
  );
};
