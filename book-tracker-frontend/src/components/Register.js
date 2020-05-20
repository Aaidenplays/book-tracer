import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {userAdded} from '../actions/actions'
// import * as actions from '../actions/actionTypes';
import store from '../store'



export class Register extends Component {
  constructor(){
    super()

    this.state={
      username: ''
    }
  };

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('reached')
    store.dispatch(userAdded(this.state.username))
    console.log(store.getState());
    // store.subscribe(()=>{
    //   console.log("Store changed!", store.getstate());
    // })
  }


  render () {
    return (
      <div className='register'>
      <h1 className='reg-title'>Register</h1>
        <div className='reg-innards'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group size='sm'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                type='text'
                placeholder='Username'
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' disabled/>
            </Form.Group>
            <Button className='reg-button' variant='primary' type='submit'>
                Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Register
