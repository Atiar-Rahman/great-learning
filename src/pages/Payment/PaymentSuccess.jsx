import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const {tranId} = useParams();
    return (
        <div>
            <h1>payment success</h1>
            <p>your tranjaction id: {tranId}</p>
        </div>
    );
};

export default PaymentSuccess;