import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCompany,
  getCompanies,
} from "../../redux/bicycles/bicyclesOperations";
import { toggleModal } from "../../redux/bicycles/bicyclesSlice";
import css from "./BicyclesDeleteBtn.module.css";

function BicyclesDeleteBtn() {
  const dispatch = useDispatch();
  const handleDeletebtn = (e) => {
    dispatch(deleteCompany(e.currentTarget.parentElement.id));
    dispatch(toggleModal());
    dispatch(getCompanies());
  };

  return (
    <>
      <button className={css.btn} type="button" onClick={handleDeletebtn}>
        Delete
      </button>
    </>
  );
}

export default BicyclesDeleteBtn;
