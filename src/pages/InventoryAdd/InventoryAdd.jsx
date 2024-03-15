import "./InventoryAdd.scss";
import React from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg"

import { useState, useEffect } from "react";
import axios from "axios";

function InventoryAdd() {




  return (
    <main className="add-item">
      <section className="add-item__title-wrap">
        <img className="add-item__chevron" src={backArrow} alt="back arrow" />
        <h1 className="add-item__title">Add New Inventory Item</h1>
      </section>
      <hr />
      <section className="warehouses-list-section"></section>
    </main>
  );
}
export default InventoryAdd;
