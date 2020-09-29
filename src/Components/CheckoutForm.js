import {
  Button,
  FormControl,
  Grid,
 
  makeStyles,
  
  TextField
} from '@material-ui/core'
//import Yup from 'yup'
import {database} from '../Config/firebaseConfig'
import {
  CardCvcElement,
 
  CardExpiryElement,
  CardNumberElement
} from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import React, { useRef, useState } from 'react'
import StripeInput from './../StripInput'
import { NavLink } from 'react-router-dom'
import { Formik } from 'formik'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    position:'absolute',
    msAlignSelf:'center',
    

  },
  margin: {},
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '50ch',
    margin: theme.spacing(1)
  },
  form:{
    background:"#fff",
    padding:"20px"
  }
}))

const CheckoutForm = () => {
   const [state, setState] = useState({
    cardNumber:"",
    expiryDate:"",
    cvv:""

  });
  const classes = useStyles()
  const stripePromise = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG')
  const cardNumberRef = useRef()
  const expiryDateRef = useRef()
  const cvvRef = useRef()
  // const paymentSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   lastName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  // });

  const handleSubmit = event => {
    console.log(`event${event}`)
    // Block native form submission.
    //event.preventDefault()

    /*  const { stripe, elements } = this.props

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardNumberElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    })
    if (error) {
      console.log('[error]', error)
    } else {*/
    // console.log('[PaymentMethod]', paymentMethod)
    ///   setstate({cardNumber:cardNumber.current.value,expiryDate:expiryDate.current.value,cvv:cvv.current.value})
    //  const {cardNumber,expiryDate,cvv}=state
    //console.log('card number....', cardNumberRef.current.value)
    //console.log('expirydate....', expiryDateRef.current.value)
    console.log('cvv....', cvvRef.current.value)

    

    
    
// database.ref("members").push({
//   name:'hello123',
//   accountNumber:'3566000020000410',
//   expiryDate:'02/21',
//   cvv:'123'
//   })


  // database.ref("members")
  // .once('value')
  // .then((snapshot)=>{
  //   const expenses=[];
  //   snapshot.forEach((childSnapShot)=>{
  //     expenses.push({"id":childSnapShot.key,
  //     ...childSnapShot.val()
  //   })
  //   });
  //   //console.log("expeses:",expenses);
  // });
    
    // }
  }

  return (
    <div>
      <Elements stripe={stripePromise}>
      
          <Grid container className={classes.form}>
            <Grid item xs={2} />
            <Grid item xs={8} sm={3}>
              {/* <InputLabel htmlFor="card-element">Card Number</InputLabel>
        <CardElement id="card-element" /> */}


<Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
    
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
          <FormControl  >
           
              <TextField
                label='Credit Card Number'
                name='cardnumber'
                variant='outlined'
                required
                fullWidth

                value="123"
                onChange={e=>{console.log(e)
                  setState({...state,cardNumber:e.currentTarget})}}
                //inputRef={cardNumberRef}
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputComponent: StripeInput,
                  inputRef:{cardNumberRef},
                  inputProps: {
                    component: CardNumberElement
                  }
                }}
              />

              {/* <InputLabel htmlFor="card-element">Card Number</InputLabel>
        <CardElement id="card-element" /> */}
        
              <TextField
                label='Expiry Date'
                name='expirydate'
                variant='outlined'
                required
                fullWidth
            
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputComponent: StripeInput,
                  inputRef:{expiryDateRef},
                  inputProps: {
                    component: CardExpiryElement,
                    value:"12345677"
                  }
                  

                }}
              />

              {/* <InputLabel htmlFor="card-element">Card Number</InputLabel>
        <CardElement id="card-element" /> */}
              <TextField
                label='CVV'
                name='cvv'
                variant='outlined'
                required
                fullWidth
                inputRef={cvvRef}
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  inputComponent: StripeInput,
                  inputRef:{cvvRef},
                  inputProps: {
                    component: CardCvcElement
                  }
                }}
              />
              <Button type='submit' color='primary' variant="contained" onClick={handleSubmit}>Payment</Button>
              
              </FormControl>
              </Formik>
            </Grid>
            <Grid item xs={2} />
          </Grid>
      
      </Elements>
    </div>
  )
}

export default CheckoutForm
