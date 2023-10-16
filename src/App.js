import React, {useState,useEffect} from 'react';
import './App.css';
import Order from './Component/Order';
import OrderList from './Component/OrderList';

const App = ()  => {
  const [orderList, setOrderList] = useState([]);
  const [isOrder, setIsOrder] = useState(false);

  useEffect(() => {
    const storedOrders = Object.values(localStorage).map((item) => JSON.parse(item));
    setOrderList(storedOrders);
    console.log("effect")
    console.log(storedOrders)
  }, []);



  const addOrderHandler = (oId, oPrice, oProduct, oCategory) => {
    const newOrder = {
      OrderId: oId,
      price: oPrice,
      product: oProduct,
      category: oCategory,
      id: Math.random().toString(),
    };
    
    localStorage.setItem( oId.toString(),JSON.stringify(newOrder));
    const updatedList = [...orderList, newOrder];
    setOrderList(updatedList);
    setIsOrder(true);
  };


  const deleteOrderHandler = (oId) => {
    // Remove the order from local storage
    localStorage.removeItem(oId.toString());
  
    // Update the order list on the screen by filtering out the deleted order
    const updatedList = orderList.filter((order) => order.OrderId !== oId);
    setOrderList(updatedList);
  };
  

  return (
    <div className="App">
    <Order onOrder={addOrderHandler}></Order>
      
      <OrderList
        orders={orderList}
        onOrder={isOrder}
        onClick={deleteOrderHandler}
      ></OrderList>
    </div>
  );
}

export default App;
