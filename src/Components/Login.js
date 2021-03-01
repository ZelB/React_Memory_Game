import React, { Component } from 'react'

//import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export class Login extends Component {
    //Set initial state
    state = {};

    //When the user enters their name
    handleNameChange = (e) => {
        this.setState({playerName: e.target.value});
    };

    //When the user click the submit button
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.playerName(this.state.playerName, false);
    }

    render() {
        return (
            <div className='loginWrapper'>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Enter Your Name</Form.Label>
                        <Form.Control 
                            type="name" 
                            placeholder="My Name"  
                            onChange={this.handleNameChange}/>
                    </Form.Group>

                    <h4>Lets test your Memory...</h4>

                    <Button 
                        variant="info"
                        onClick={this.handleSubmit}

                        >Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default Login

