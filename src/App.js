import React, {useState,useEffect} from 'react';
import './App.css';
import Order from './Component/Order';
import OrderList from './Component/OrderList';

const App = ()  => {
  const [orderList, setOrderList] = useState([]);
  const [isOrder, setIsOrder] = useState(false);

  useEffect(() => {
    // this is used when we iterate through value
    //const storedOrders = Object.keys(localStorage).map((item) => JSON.parse(item));
    // this is used when we iterate through key
    const storedOrders = Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key)));
    setOrderList(storedOrders);
    console.log("effect")
    console.log(storedOrders)
  }, []);



  const addOrderHandler = (oId, oPrice, odish, oCategory) => {
    const newOrder = {
      OrderId: oId,
      price: oPrice,
      dish: odish,
      category: oCategory,
      id: Math.random().toString(),
    };
    const key = `${oId}-${odish}`
    localStorage.setItem( key,JSON.stringify(newOrder));
    const updatedList = [...orderList, newOrder];
    setOrderList(updatedList);
    setIsOrder(true);
  };


  const deleteOrderHandler = (oId,odish) => {
    const key = `${oId}-${odish}`
    localStorage.removeItem( key);
    const updatedList = orderList.filter((order) => order.id !== oId && order.dish!==odish)
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
