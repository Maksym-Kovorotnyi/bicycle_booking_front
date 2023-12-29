import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../svg/arrowDown.svg";
import { useDispatch } from "react-redux";
import {
  getBicycles,
  updateStatus,
} from "../../redux/bicycles/bicyclesOperations";

import css from "./ChangeStatusComponent.module.css";

function ChangeStatusComponent() {
  const [statusList, setStatusList] = useState(false);
  const dispatch = useDispatch();

  const handleChangeStatus = async (e) => {
    const idEl = e.currentTarget.parentElement.parentElement.id;
    const value = { status: e.target.innerText };
    try {
      switch (e.target.localName) {
        case "div":
        case "svg":
        case "path":
          setStatusList(!statusList);
          break;
        case "li":
          await dispatch(updateStatus({ id: idEl, body: value }));
          setStatusList(!statusList);
          dispatch(getBicycles());
          break;
        default:
          setStatusList(false);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css.statusContainer} onClick={handleChangeStatus}>
      <ArrowIcon />
      {statusList ? (
        <ul className={css.statusList}>
          <li className={css.statusItem}>Available</li>
          <li className={css.statusItem}>Busy</li>
          <li className={css.statusItem}>Unavailable</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChangeStatusComponent;
