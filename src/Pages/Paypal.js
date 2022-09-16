import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectPrice } from "../Redux/PriceSlice";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {
  const classes = useStyles();
  const price = useSelector(selectPrice);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const createOrder = (data, actions) => {
    console.log(price)
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: price,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  return (
    <div className={classes.root}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AQnY7t35rSyTNW3A0LK70uIe26h_NLkV-ZQ0WiUHy95rOLeUB_PhV6fgWPPWIe96cf65ODrzEcuYUxQd",
        }}
      >
        <PayPalButtons style={{ layout: "horizontal" }}  />
      </PayPalScriptProvider>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
}));

export default Paypal;
