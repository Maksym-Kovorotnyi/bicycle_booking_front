import React from "react";
import { useDispatch } from "react-redux";
import { createBicycle } from "../../redux/bicycles/bicyclesOperations";
import css from "./CreateBicycleForm.module.css";

function CreateBicycleForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.currentTarget.elements);
    const newBicycle = {
      name: e.currentTarget.elements.name.value,
      type: e.currentTarget.elements.type.value,
      color: e.currentTarget.elements.color.value,
      wheelSize: e.currentTarget.elements.wheelSize.value,
      price: e.currentTarget.elements.price.value,
      id: e.currentTarget.elements.id.value,
      description: e.currentTarget.elements.description.value,
    };
    dispatch(createBicycle(newBicycle));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          placeholder="Name"
          type="text"
          name="name"
          required
        />
        <input
          className={css.input}
          placeholder="Type"
          type="text"
          name="type"
          required
        />
        <input
          className={css.input}
          placeholder="Color"
          type="text"
          name="color"
          required
        />
        <input
          className={css.input}
          placeholder="Wheel size"
          type="number"
          name="wheelSize"
          required
        />
        <input
          className={css.input}
          placeholder="Price"
          type="text"
          name="price"
          required
        />
        <input
          className={css.input}
          placeholder="ID (slug): XXXXXXXXXX"
          type="number"
          name="id"
          required
        />
        <textarea
          className={css.input}
          placeholder="Description"
          name="description"
          required
        />
        <button className={css.btn} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateBicycleForm;
