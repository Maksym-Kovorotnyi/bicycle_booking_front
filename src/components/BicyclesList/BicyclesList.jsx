import React from "react";
import CompaniesItem from "../BicyclesItem/BicyclesItem";
import css from "./BicyclesList.module.css";

function BicyclesList() {
  return (
    <>
      <ul className={css.list}>
        <CompaniesItem />
      </ul>
    </>
  );
}

export default BicyclesList;
