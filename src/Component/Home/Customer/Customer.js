import React from 'react';
import CustomerFeedBack from '../CustomerFeedBack/CustomerFeedBack';
import CustomerFeedBackHeader from '../CustomerFeedBackHeader/CustomerFeedBackHeader';
import Footer from '../Footer/Footer';

const Customer = () => {
    return (
        <div className="container">

            <CustomerFeedBackHeader></CustomerFeedBackHeader>
            <CustomerFeedBack></CustomerFeedBack>
            <Footer></Footer>
            
        </div>
    );
};

export default Customer;