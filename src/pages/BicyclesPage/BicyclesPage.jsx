import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBicycles } from "../../redux/bicycles/bicyclesOperations";
import BicyclesList from "../../components/BicyclesList/BicyclesList";
import AddBicyclesBtn from "../../components/AddBicyclesBtn/AddBicyclesBtn";
import css from "./BicyclesPage.module.css";
import CreateBicycleForm from "../../components/CreateBicycleForm/CreateBicycleForm";

function BicyclesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBicycles());
  });
  return (
    <div className={css.container}>
      <CreateBicycleForm />
      <AddBicyclesBtn />
      <BicyclesList />
    </div>
  );
}

export default BicyclesPage;
