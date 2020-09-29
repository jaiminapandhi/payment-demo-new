import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Link} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import CheckoutForm from './CheckoutForm'
import ShowUserData from './ShowUserData'
import TabContext from '@material-ui/lab/TabContext';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:"fixed",
    top:0,
    left:0,
    width:"100%"
    
  },
}));

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

export default function Index() {

      
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <div className={classes.root}
    >
         <TabContext value={value}>
                   <AppBar position="static">
      <Tabs
          value={value}
          onChange={handleChange}
          
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Add New Card Detail" value="1"/>
          <Tab label="Show Card Detail" value="2"  />
         
        </Tabs>
      </AppBar>
     {console.log(value)}
      <TabPanel value="1" index="one">
        <CheckoutForm/>
      </TabPanel>
      <TabPanel value="2" index="two" >
        <ShowUserData/>
      </TabPanel>
      </TabContext>

    </div>
  );
}
