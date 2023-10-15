import React, {useState,useEffect} from 'react';
import './App.css';
import Order from './Component/Order';
import OrderList from './Component/OrderList';

const App = ()  => {
  const [orderList, setOrderList] = useState([]);
  const [isOrder, setIsOrder] = useState(false);

  useEffect(() => {
    const loadedOrders = [];
    setOrderList(loadedOrders);
      const orderInformation = JSON.parse(localStorage.getItem("key"))
      console.log(orderInformation)
      if (orderInformation ==="newOrder") {
        setIsOrder(true);
      }
    }, []);

  const addOrderHandler = (oId, oPrice, oProduct, oCategory) => {
    const newOrder = {
      OrderId: oId,
      price: oPrice,
      product: oProduct,
      category: oCategory,
      id: Math.random().toString(),
    };
        
    localStorage.setItem( +oId,JSON.stringify(newOrder));
    const updatedList = [...orderList, newOrder];
    setOrderList(updatedList);
    setIsOrder(true);
  };

  const deleteOrderHandler = (oId) => {
 
    localStorage.removeItem(+oId)
    const updatedList = orderList.filter((order) => order.id !== oId);
    
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
