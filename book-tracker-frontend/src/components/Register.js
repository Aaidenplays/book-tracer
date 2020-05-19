import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class Register extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
        }
    }

  render () {
    return (
      <div className='register'>
      <h1 className='reg-title'>Register</h1>
        <div className='reg-innards'>
          <Form>
            <Form.Group size='sm'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Username'
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
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
