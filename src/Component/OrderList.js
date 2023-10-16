
import React from "react";
const OrderList = (props) => {
  const table1Order = props.orders.filter((order) => order.category === "Table1");
  const table2Order = props.orders.filter(
    (order) => order.category === "Table2"
  );
  const table3Order = props.orders.filter(
    (order) => order.category === "Table3"
  );
  const showOrder = (orders) => {
    return orders.map((order) => (
      <li key={order.id}>
        {order.OrderId} - {order.price} - {order.dish} - {order.category}{" "}
        <button type="button" onClick={() => props.onClick(order.OrderId)}>
          Delete Product
        </button>
      </li>
    ));
  };
  return (
    <div class="order-list">
      <div className="category">
        <h2>Table1</h2>
        <ul>{showOrder(table1Order)}</ul>
      </div>
      <div className="category">
        <h2>Table2</h2>
        <ul>{showOrder(table2Order)}</ul>
      </div>
      <div className="category">
        <h2>Table3</h2>
        <ul>{showOrder(table3Order)}</ul>
      </div>
    </div>
  );
};
export default OrderList;

