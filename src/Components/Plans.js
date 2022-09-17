import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { NetflixButton } from '../styled'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {useState} from 'react'


const Plans = ({cost,children}) => {

  const classes = useStyles()
  const [approved,setApproved] = useState(false)

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: cost,
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
      setApproved(true)
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
        <Typography  variant='h5'>{children}</Typography>
        <NetflixButton radius onClick={()=>setShow(!show)} >Subscribe</NetflixButton>
        {show ? (
         <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
         />
       ) : null}
      </PayPalScriptProvider>
      {approved ?
        <div className={classes.approved}>APPROVED</div>
        :
        null
      }
    </div>
  )
}

const useStyles = makeStyles((theme)=>({
  root:{
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    margin:'40px 0px',
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  approved:{
    zIndex:"300",
    width:"28%",
    position:"absolute",
    fontSize:"4rem",
    left:"0",
    bottom:"0"
  }
}))

export default Plans