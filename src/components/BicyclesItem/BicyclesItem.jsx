import React from "react";
import { useSelector } from "react-redux";
import css from "./BicyclesItem.module.css";
import ChangeStatusComponent from "../ChangeStatusComponent/ChangeStatusComponent";
import BicyclesDeleteBtn from "../BicyclesDeleteBtn/BicyclesDeleteBtn";

function BicyclesItem() {
  const bicycles = useSelector((state) => state.bicycles);

  return (
    <>
      {bicycles?.map(({ _id, name, type, color, price, status }) => {
        const statusStyles = {
          borderColor:
            status === "Available"
              ? "#6FCF97"
              : status === "Busy"
              ? "#F2994A"
              : "#EB5757",
          opacity: status === "Unavailable" ? "0.5" : 1,
        };
        return (
          <li style={statusStyles} className={css.item} key={_id} id={_id}>
            <BicyclesDeleteBtn />
            <h2 className={css.title}>
              {name.toUpperCase()} -
              <span className={css.text}>
                {type.toUpperCase()} ({color.toUpperCase()})
              </span>
            </h2>
            <p className={css.id}>ID: {_id}</p>
            <div className={css.statusContainer}>
              <p className={css.status}>STATUS: {status}</p>
              <ChangeStatusComponent />
            </div>
            <p className={css.price}>{price.toFixed(2)} UAH/hr.</p>
          </li>
        );
      })}
    </>
  );
}

export default BicyclesItem;
