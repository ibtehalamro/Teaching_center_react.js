import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useResolvedPath } from "react-router";
import { PaymentUrls } from "../../../Constants/URLConstants/PaymentUrls";
import PaymentHome from "./PaymentHome";
import NewPaymentForm from "./NewPaymentForm"; 
const PaymentRouter = ()=>{
    const pathname = useResolvedPath("").pathname;
    return (
      <div className="payment-wrapper">
        <div className="buttons-container">
          <NavLink className="cross-fade-button" to={`${pathname}${PaymentUrls.HOME}`}>Home</NavLink>
          <NavLink className="cross-fade-button" to={`${pathname}${PaymentUrls.NEW_PAYMENT_FORM}`}>New Payment</NavLink>
          <NavLink className="cross-fade-button" to={`${pathname}${PaymentUrls.PAYMENT_LIST}`}>Payments List</NavLink>
         </div>
  
        <Routes>
          <Route exact path={`${PaymentUrls.HOME}`} element={<PaymentHome />} />
          <Route exact path={`${PaymentUrls.NEW_PAYMENT_FORM}`} element={<NewPaymentForm/>} />
          {/* <Route exact path={`${PaymentUrls.PAYMENT_LIST}`} element={<PaymentsList/>} /> */}
         </Routes>
      </div>
    );
}
export default PaymentRouter;