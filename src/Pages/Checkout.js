import React, { useState } from "react";
import productsData from "../data/productsData";

const Checkout = () => {
  const [data, setData] = useState(productsData);
  const [count, setCount] = useState(1);
  const [checkoutArr, setCheckoutArr] = useState(JSON.parse(localStorage.getItem("id")) || []);
  // const [checkoutFilter, setCheckoutFilter] = useState([]);

  // const checkoutArr=JSON.parse(localStorage.getItem("id")) || []
  const checkoutFilter = data.filter((item) => checkoutArr.includes(item.id));

  function handleCount(index, operation) {
    const updatedArray = [...checkoutFilter];
    const currentItem = updatedArray[index];
  
    if (operation === "increase") {
      setCount((count) => count + 1);
    } else {
      if (count > 1) {
        setCount((count) => count - 1);
      }
    }
  
  
    updatedArray[index] = { ...currentItem, price: currentItem.price * count };
    console.log(updatedArray[index].price);
  }

  function handleRemove(index) {
    checkoutArr.splice(index,1)
    localStorage.setItem("id",JSON.stringify(checkoutArr))
    const updatedArray=JSON.parse(localStorage.getItem("id"))
    setCheckoutArr(updatedArray)
    console.log(updatedArray);
  }

  const checkoutElements = checkoutFilter.map((item, index) => {
    return (
      <div key={item.id} className="checkout-box rounded bg-white p-3">
        <h4 className="checkbox-heading pb-3">{item.name}</h4>
        <div className="checkbox-sub-box d-flex gap-5 align-items-center">
          <img src={item.thumbnail} className="checkoutImage" />
          <div className="py-3 checkoutText d-flex gap-3 flex-column">
            <div className="action d-flex align-items-center gap-3">
              <button
                onClick={() => handleRemove(index)}
                className="text-bg-secondary border-0 "
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button
                onClick={() => handleCount(index, "decrease")}
                className="decrease-btn text-bg-danger border-0 rounded-5"
              >
                -
              </button>
              <span className="number border border-secondary py-1 px-3">
                {count}
              </span>
              <button
                onClick={() => handleCount(index, "increase")}
                className="increase-btn text-bg-success border-0 rounded-5"
              >
                +
              </button>
            </div>
            <p className="total">
              <span className="dark">Total</span> :{" "}
              <span className="total-amount">{item.price}</span>
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="checkout-container my-5 d-flex flex-column gap-3">
      {checkoutElements}
    </div>
  );
};

export default Checkout;
