import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

class Customer_Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            password:'',
            toipc:'Admin'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.password} ${this.state.topic}`);
        event.preventDefault();
    }


    render() {
        return (
            // <form onSubmit={this.handleSubmit} className="loginForm">
            //     <div>
            //         <label>username</label>
            //         <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
            //     </div>
            //     <div>
            //         <label>password</label>
            //         <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
            //     </div>
            //     <div>
            //         <label>Account</label>
            //         <select value={this.state.topic} onChange={this.handleTopicChange}>
            //             <option value="admin">Admin</option>
            //             <option value="customer">Customer</option>
            //             <option value="driver">Driver</option>
            //         </select>
            //     </div>
            //     <Button type="submit" variant="success">Log-In </Button>
            
            // </form>

            <Form onSubmit={this.handleSubmit} className="loginForm">
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={this.state.username} onChange={this.handleUsernameChange}  type="username" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" value={this.state.password} onChange={this.handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        );
    }
}

export default Customer_Form;