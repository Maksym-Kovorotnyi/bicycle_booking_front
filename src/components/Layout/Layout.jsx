import React from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

function Layout() {
  return (
    <>
      <header className={css.header}>
        <h1 className={css.title}>ADMIN.BIKE-BOOKING.COM</h1>
      </header>
      <Outlet />
      <footer className={css.footer}>
        <p className={css.text}>
          Developer: <span className={css.myName}>Maksym Kovorotnyi</span>
        </p>
      </footer>
    </>
  );
}

export default Layout;
