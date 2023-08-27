import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = ({ cart ,handleRemove,handleDecrease,handleIncrease}) => {
  // const [checkoutArr, setCheckoutArr] = useState(
  //   JSON.parse(localStorage.getItem("cart")) || []
  // );




  function handleTotal() {
    const updatedArray = [...cart];
    const sum = updatedArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.quantity;
    }, 0);
    return sum;
  }

  const checkoutElements = cart.map((item, index) => {
    return (
      <div key={item.id} className="checkout-box bg-white p-3">
        <h4 className="checkbox-heading pb-3">{item.name}</h4>
        <div className="checkbox-sub-box d-flex gap-5 align-items-center">
          <img src={item.thumbnail} className="checkoutImage" />
          <div className="py-3 checkoutText d-flex gap-3 flex-column">
            <div className="action d-flex align-items-center gap-3">
              <button
                onClick={() => handleRemove(item.id)}
                className="text-bg-secondary border-0 "
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button
                onClick={() => handleDecrease(index)}
                className="decrease-btn text-bg-danger border-0 rounded-5"
              >
                -
              </button>
              <span className="number border border-secondary py-1 px-3">
                {item.quantity}
              </span>
              <button
                onClick={() => handleIncrease(index)}
                className="increase-btn text-bg-success border-0 rounded-5"
              >
                +
              </button>
            </div>
            <p className="total">
              <span className="dark">Total</span> :{" "}
              <span className="total-amount">{item.price * item.quantity}</span>
            </p>
          </div>
        </div>
      </div>
    );
  });

  function handlePay() {
    toast.success(`Thanks for using the website :)`, {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <>
      <ToastContainer />
      {cart.length == 0 ? (
        <h1 className="text-center mt-5">Nothing in the cart :(</h1>
      ) : (
        <div className="checkout-container my-5 d-flex flex-column">
          {checkoutElements}
          <button
            onClick={handlePay}
            className="border-0 py-3 text-bg-success pay"
          >{`Proceed to Pay($ ${handleTotal()})`}</button>
        </div>
      )}
    </>
  );
};

export default Checkout;
