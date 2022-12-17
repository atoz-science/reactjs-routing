import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <button onClick={()=> navigate('order-summary')}>Place Order</button>
    </>
  );
};

export default Home;
