import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../svg/arrowDown.svg";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/bicycles/bicyclesOperations";

function ChangeStatusComponent() {
  const [statusList, setStatusList] = useState(false);
  const dispatch = useDispatch();

  const handleChangeStatus = (e) => {
    const idEl = e.currentTarget.parentElement.id;
    const value = { status: e.target.innerText?.toLowerCase() };
    switch (e.target.localName) {
      case "svg":
        setStatusList(!statusList);
        break;
      case "path":
        setStatusList(!statusList);
        break;
      case "p":
        dispatch(updateStatus({ id: idEl, body: value }));
        setStatusList(!statusList);
        break;

      default:
        setStatusList(false);
        break;
    }
  };

  return (
    <div onClick={handleChangeStatus}>
      <ArrowIcon />
      {statusList ? (
        <div>
          <p>Available</p>
          <p>Busy</p>
          <p>Unavailable</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChangeStatusComponent;
