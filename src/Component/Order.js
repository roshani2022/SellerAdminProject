import React, { useState } from "react";
const Order = (props) => {
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("Food");

  const idHandler = (event) => {
    setProductId(event.target.value);
  };
  const priceHandler = (event) => {
    setProductPrice(event.target.value);
  };
  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };
  const categoryHandler = (event) => {
    setProductCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onOrder(productId,productPrice,productName,productCategory);
    setProductId("");
    setProductPrice("");
    setProductName("");
    setProductCategory("Food");
  };

  return (
    <div className="Order">
      <form onSubmit={submitHandler}>
        <div className="order-contol">
          <label htmlFor="Product ID">Product Id</label>
          <input id="id" type="number" value={productId} onChange={idHandler} />
        </div>
        <div className="order-contol">
          <label htmlFor="Selling Price">Selling Price:</label>
          <input
            type="number"
            id="price"
            value={productPrice}
            onChange={priceHandler}
          />
        </div>
        <div className="order-contol">
          <label htmlFor="Product Name">Product Name:</label>
          <input
            type="text"
            id="product"
            value={productName}
            onChange={productNameHandler}
          />
        </div>
        <div className="order-contol">
          <label htmlFor="Table">Choose a Category </label>
          <select value={productCategory} onChange={categoryHandler}>
            <option value="Food">Food</option>
            <option value="SkinCare">SkinCare</option>
            <option value="ElectronicItem">ElectronicItem</option>
          </select>
        </div>
        <div>
          <button type="submit" className="order-action">Add Product</button>
        </div>
      </form>
    </div>
  );
};
export default Order;