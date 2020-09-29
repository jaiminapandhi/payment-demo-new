import React, { useRef, useImperativeHandle } from 'react'
const StripeInput = (
     { component: Component, inputRef, ...props }
) => {
     const elementRef = useRef();
     const cvvRef = useRef();
     useImperativeHandle(inputRef, () => ({
          focus: () => elementRef.current.focus,
          value: () => cvvRef.current.value
     }));
     return (
          <Component
               onReady={element => (elementRef.current = element)}   
             
               {...props}
          />
     )
}
export default StripeInput;