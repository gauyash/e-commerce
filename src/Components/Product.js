import React from "react";

const Product = ({ filterData ,addToCart }) => {
  return (
    <>
      {filterData.map((productItem,index) => {
        return (
          <div key={productItem.id} className="product-box d-flex">
            <img src={productItem.thumbnail} alt="" className="productImage" />
            <div className="category-text text-center py-3">
              <h4 className="pb-1">{productItem.name}</h4>
              {productItem.delivery ? (
                <span className="delivery-status text-success">
                  Available for delivery
                </span>
              ) : (
                <span className="delivery-status text-danger">
                  Not Available for delivery
                </span>
              )}

              <p className="price py-2">{`$ ${productItem.price}`}</p>
              {productItem.inStock ? (
                <button onClick={()=>addToCart(index)} className="border-0 py-2 px-4 rounded-2 text-bg-success add-to-cart">
                  Add to Cart
                </button>
              ) : (
                <span className="stock-status text-muted">Out of Stock</span>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
