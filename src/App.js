
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
// import ShowUserData from './ShowUserData'


import React, { Component } from 'react'

import AppRouter from './AppRouter';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


class App extends Component {
  render () {
    return (
      <div>
       
          <div className='AppRouter'>
            
            <AppRouter/>
          </div>
       
        
          
       
      </div>
    )
  }
}

export default App
