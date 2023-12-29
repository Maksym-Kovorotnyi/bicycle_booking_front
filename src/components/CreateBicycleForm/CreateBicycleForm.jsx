import React from "react";
import { useDispatch } from "react-redux";
import {
  createBicycle,
  getBicycles,
} from "../../redux/bicycles/bicyclesOperations";
import css from "./CreateBicycleForm.module.css";

function CreateBicycleForm() {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatPrice = e.currentTarget.elements.price.value.replace(",", ".");
    const newBicycle = {
      name: e.currentTarget.elements.name.value,
      type: e.currentTarget.elements.type.value,
      color: e.currentTarget.elements.color.value,
      wheelSize: e.currentTarget.elements.wheelSize.value,
      price: formatPrice,
      id: e.currentTarget.elements.id.value,
      description: e.currentTarget.elements.description.value,
    };
    try {
      await dispatch(createBicycle(newBicycle));
      dispatch(getBicycles());
      const formElements = document.querySelectorAll(
        "form input, form textarea"
      );
      formElements.forEach((element) => {
        element.value = "";
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          minLength={5}
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
          minLength={5}
          required
        />
        <input
          className={css.input}
          placeholder="Color"
          type="text"
          name="color"
          minLength={5}
          required
        />
        <input
          className={css.input}
          placeholder="Wheel size"
          type="number"
          name="wheelSize"
          minLength={5}
          required
        />
        <input
          className={css.input}
          placeholder="Price"
          type="text"
          name="price"
          minLength={5}
          required
        />
        <input
          className={css.input}
          placeholder="ID (slug): XXXXXXXXXX"
          type="number"
          name="id"
          minLength={5}
          required
        />
        <textarea
          className={css.textArea}
          placeholder="Description"
          name="description"
          minLength={5}
          required
        />
        <button className={css.btn} type="submit">
          SAVE
        </button>
        <button className={css.btn} type="reset">
          CLEAR
        </button>
      </form>
    </div>
  );
}

export default CreateBicycleForm;
