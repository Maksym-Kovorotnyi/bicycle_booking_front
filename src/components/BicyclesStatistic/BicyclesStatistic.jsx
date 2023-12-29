import React from "react";
import { useSelector } from "react-redux";
import css from "./BicyclesStatistic.module.css";

function BicyclesStatistic() {
  const bicycles = useSelector((state) => state.bicycles);

  const totalBikes = bicycles.length;
  const availableBikes = bicycles.filter((bike) => bike.status === "Available");
  const busyBikes = bicycles.filter((bike) => bike.status === "Busy");
  const totalCost = bicycles.reduce((total, bike) => {
    return total + bike.price;
  }, 0);
  const avarageCost = totalCost / bicycles.length || 0;
  return (
    <div className={css.container}>
      <h1 className={css.title}>STATISTICS</h1>
      <p className={css.text}>
        Total Bikes: <span className={css.value}>{totalBikes}</span>
      </p>
      <p className={css.text}>
        Available Bikes:{" "}
        <span className={css.value}>{availableBikes.length}</span>
      </p>
      <p className={css.text}>
        Booked Bikes: <span className={css.value}>{busyBikes.length}</span>
      </p>
      <p className={css.text}>
        Average bike cost:{" "}
        <span className={css.value}>{avarageCost.toFixed(2)}</span>
        UAH/hr.
      </p>
    </div>
  );
}

export default BicyclesStatistic;
