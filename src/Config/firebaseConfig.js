import React from 'react';
import firebase from 'firebase';
const  firebaseConfig = {
      apiKey: "AIzaSyBA7jTlWhZIhJkXg8oM1Vv1NBBAcxVBtaw",
      authDomain: "payment-react-project.firebaseapp.com",
      databaseURL: "https://payment-react-project.firebaseio.com",
      projectId: "payment-react-project",
      storageBucket: "payment-react-project.appspot.com",
      messagingSenderId: "159312043164",
      appId: "1:159312043164:web:37b8b554685355c1086159",
      measurementId: "G-JLFQJKMHDC"
  
  }

   // if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics()
     export  const database = firebase.database()
    //}

// const firebase = () => {

     
    
//     return (
//         <div>
            
//         </div>
//     );
// }

//export default firebase;
