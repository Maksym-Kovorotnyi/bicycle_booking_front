import React from "react";
import { useSelector } from "react-redux";
import css from "./BicyclesItem.module.css";
import ChangeStatusComponent from "../ChangeStatusComponent/ChangeStatusComponent";

function BicyclesItem() {
  const bicycles = useSelector((state) => state.bicycles);
  return (
    <>
      {bicycles?.map(({ _id, name, type, color, price, status }) => {
        return (
          <li className={css.item} key={_id} id={_id}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.text}>{type}</p>
            <p className={css.text}>({color})</p>
            <p className={css.text}>ID: {_id}</p>
            <p className={css.text}>STATUS: {status}</p>
            <ChangeStatusComponent />
            <p className={css.text}>{price}</p>
          </li>
        );
      })}
    </>
  );
}

export default BicyclesItem;
