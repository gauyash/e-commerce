import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import MainLayout from "./Components/MainLayout";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";
import { useReducer, useState } from "react";
import data from "./data/productsData";

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "REMOVE": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "DECREASE": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filterData, setFilterData] = useState(data);

  // Handle add to cart button
  function addToCart(id) {
    const item = {
      ...filterData[id],
      quantity: 1,
    };

    dispatch({ type: "ADD", payload: item });
  }

  function handleRemove(id) {
    const updatedCart = state.cart.filter((item) => item.id != id);
    dispatch({ type: "REMOVE", payload: updatedCart });
  }

  function handleDecrease(index) {
    const newArray = [...state.cart];
    const updatedCart = newArray.map((item, id) => {
      if (id == index) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    dispatch({ type: "DECREASE", payload: updatedCart });
  }

  function handleIncrease(index) {
    const newArray = [...state.cart];
    const updatedCart = newArray.map((item, id) => {
      if (id == index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    dispatch({ type: "DECREASE", payload: updatedCart });
  }

  console.log(state.cart);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="category/:id"
            element={<Category addToCart={addToCart} />}
          />
          <Route
            path="checkout"
            element={
              <Checkout
                cart={state.cart}
                handleRemove={handleRemove}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
