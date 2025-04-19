import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
    return (
        <div>
            <h1>payment hoy nai</h1>
            <Link to={'/'}><button>Please. Try Again</button></Link>
        </div>
    );
};

export default PaymentFail;