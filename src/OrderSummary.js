import { useNavigate } from 'react-router-dom';
import React from 'react';

export const OrderSummary = () => {
    const navigate = useNavigate();
    return (
      <>
            <div>Order Confirmed</div>
            <button onClick={()=> navigate(-1)}>Go back</button>
      </>
    );
}
