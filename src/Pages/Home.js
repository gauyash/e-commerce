import React from "react";
import { Link } from "react-router-dom";
import categoriesData from "../data/categoriesData";

const Home = () => {
  const categoriesElements = categoriesData.map((item) => {
    return (
      <Link key={item.id} to={`category/${item.id}`} className="category-items">
        <div className="shadow gap-2 bg-white rounded-2 d-flex justify-content-center align-items-center flex-column ">
          <div className="text-center">
            <i
              className={`fa-solid ${
                item.name === "Keyboards" ? "fa-keyboard" : "fa-headphones"
              }`}
            ></i>
          </div>
          <p className="text-center">{item.name}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="d-flex align-items-center justify-content-center gap-4 category">
      {categoriesElements}
      <Link to="category/all" className="category-items">
        <div className="shadow gap-2 bg-white rounded-2 d-flex justify-content-center align-items-center flex-column ">
          <div className="text-center">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <p className="text-center">Explore all products</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
