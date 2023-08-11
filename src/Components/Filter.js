import React from "react";

const Filter = ({checkbox,handleChange}) => {
  return (
    <div className="filter-box bg-white py-4 px-3 rounded-1">
      <h3 className="pb-4">Filter</h3>
      <div className="d-flex flex-column gap-2">
        <div className="d-flex gap-2 align-items-center">
          <input
            checked={checkbox.delivery}
            name="delivery"
            onChange={() => {
              handleChange("delivery");
            }}
            type="checkbox"
            className="checkbox"
            id="delivery"
          />
          <label htmlFor="delivery">Available for delivery</label>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <input
            checked={checkbox.stock}
            name="stock"
            onChange={() => {
              handleChange("stock");
            }}
            type="checkbox"
            className="checkbox"
            id="stock"
          />
          <label htmlFor="stock">Exclude out of Stock</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
