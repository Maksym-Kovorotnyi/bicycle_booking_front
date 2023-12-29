import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as CloseIcon } from "../../svg/closeIcon.svg";
import {
  deleteBicycle,
  getBicycles,
} from "../../redux/bicycles/bicyclesOperations";
import css from "./BicyclesDeleteBtn.module.css";
function BicyclesDeleteBtn() {
  const dispatch = useDispatch();
  const handleDeletebtn = async (e) => {
    try {
      await dispatch(deleteBicycle(e.currentTarget.parentElement.id));
      dispatch(getBicycles());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CloseIcon className={css.closeIcon} onClick={handleDeletebtn}>
        Delete
      </CloseIcon>
    </>
  );
}

export default BicyclesDeleteBtn;
