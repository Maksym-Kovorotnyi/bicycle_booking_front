import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBicycles } from "../../redux/bicycles/bicyclesOperations";
import BicyclesList from "../../components/BicyclesList/BicyclesList";
import css from "./BicyclesPage.module.css";
import CreateBicycleForm from "../../components/CreateBicycleForm/CreateBicycleForm";
import BicyclesStatistic from "../../components/BicyclesStatistic/BicyclesStatistic";

function BicyclesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBicycles());
  });
  return (
    <div className={css.container}>
      <BicyclesList />
      <div className={css.formStatisticContainer}>
        <CreateBicycleForm />
        <BicyclesStatistic />
      </div>
    </div>
  );
}

export default BicyclesPage;
