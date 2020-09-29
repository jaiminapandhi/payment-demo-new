import React, { useEffect, useState } from 'react'

import {database} from '../Config/firebaseConfig'
//import firebaseConfig from './firebaseConfig'
import ReactTable from 'react-table'
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  Container
} from '@material-ui/core'

class ShowUserData extends React.Component {
  constructor (props) {
    super(props)
    this.state = { data: [] 
  }

   
  }

  componentWillMount () {
    console.log('state', this.state)
  

      database.ref('members').on('value', snapshot => {
        console.log("snapshot",snapshot)
        const data = []
        snapshot.forEach(childSnapShot => {
          const user = {
            name: childSnapShot.val().name,
            accountNumber: childSnapShot.val().accountNumber,
            expiryDate: childSnapShot.val().expiryDate,
            cvv: childSnapShot.val().cvv,
          }

          data.push(user)
        })
        this.setState(prevState => {
          return { data: data }
        })
        console.log('state', this.state)
      })
    
   
  }

 

  render () {
    return (
      <React.Fragment>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Account Holder Name </TableCell>
                <TableCell align='right'>Account Number</TableCell>
                <TableCell align='right'>Expiry Date</TableCell>
                <TableCell align='right'>CVV</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((row,index) => (
       
                <TableRow key={index}>
                  <TableCell align='right'>{row.name}</TableCell>
                  <TableCell align='right'>{row.accountNumber}</TableCell>
                  <TableCell align='right'> {row.expiryDate}</TableCell>
                  <TableCell align='right'> {row.cvv}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

    
      </React.Fragment>
    )
  }
}

ShowUserData.propTypes = {}

export default ShowUserData
