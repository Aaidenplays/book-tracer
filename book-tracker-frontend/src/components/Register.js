import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {userAdded, setCurrentUser, currentUserSet} from '../actions/actions'
import { Redirect } from 'react-router'
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
    console.log(store.getState()[store.getState().length-1])
    this.setCurrentUser(store.getState()[store.getState().length-1])
  }

  setCurrentUser = (user) => {
    store.dispatch(currentUserSet(user));
    console.log('current user:',store.getState());
    this.handleRedirect();
  }

  handleRedirect = () => {
    this.props.history.push('/my-books');
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
