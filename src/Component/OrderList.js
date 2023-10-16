
import React from "react";
const OrderList = (props) => {
  const foodOrder = props.orders.filter((order) => order.category === "Food");
  const electronicOrder = props.orders.filter(
    (order) => order.category === "ElectronicItem"
  );
  const skinCareOrder = props.orders.filter(
    (order) => order.category === "SkinCare"
  );
  const showOrderItem = (orders) => {
    return orders.map((order) => (
      <li key={order.id}>
        {order.OrderId} - {order.price} - {order.product} - {order.category}{" "}
        <button type="button" onClick={() => props.onClick(order.OrderId)}>
          Delete Product
        </button>
      </li>
    ));
  };
  return (
    <div class="order-list">
      <div className="category">
        <h2>Food Items</h2>
        <ul>{showOrderItem(foodOrder)}</ul>
      </div>
      <div className="category">
        <h2>Electronic Items</h2>
        <ul>{showOrderItem(electronicOrder)}</ul>
      </div>
      <div className="category">
        <h2>SkinCare Items</h2>
        <ul>{showOrderItem(skinCareOrder)}</ul>
      </div>
    </div>
  );
};
export default OrderList;

