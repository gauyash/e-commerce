import React, { useEffect, useState } from "react";
import productsData from "../data/productsData";
import { useParams } from "react-router-dom";
import Filter from "../Components/Filter";
import Product from "../Components/Product";

const Category = () => {
  const { id } = useParams();
  const [data, setData] = useState(
    id === "all"
      ? productsData
      : productsData.filter((item) => item.categoryId === id)
  );

  const [filterData, setFilterData] = useState(data);
  const [checkbox, setCheckbox] = useState({
    delivery: false,
    stock: false,
  });

  // Handle checkbox
  function handleChange(checkboxId) {
    setCheckbox({
      ...checkbox,
      [checkboxId]: !checkbox[checkboxId],
    });
  }

  useEffect(() => {
    if (checkbox.delivery === true && checkbox.stock === true) {
      setFilterData(data.filter((item) => item.inStock && item.delivery));
    } else if (checkbox.delivery === false && checkbox.stock === false) {
      setFilterData(data);
    } else {
      setFilterData(
        data.filter((item) =>
          checkbox.delivery ? item.delivery : item.inStock
        )
      );
    }
  }, [checkbox]);

  // Handle add to cart button
  const addToCartArray = JSON.parse(localStorage.getItem("cart")) || [];
  function addToCart(id) {
    addToCartArray.push({
      ...filterData[id],
      quantity: 1,
    });
    const removeDuplicates = Array.from(
      new Set(addToCartArray.map(JSON.stringify))
    ).map(JSON.parse);
    console.log(removeDuplicates);
    localStorage.setItem("cart", JSON.stringify(removeDuplicates));
  }

  return (
    <div className="category-container d-flex justify-content-between my-5 gap-2">
      <Filter checkbox={checkbox} handleChange={handleChange} />
      <section className="category-box bg-white rounded-1">
        <Product addToCart={addToCart} filterData={filterData} />
      </section>
    </div>
  );
};
export default Category;
