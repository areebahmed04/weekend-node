import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from '../common/axios';

class Register extends Component {
   constructor(props) {
       super(props);
       this.usernameRef = React.createRef();
       this.emailRef = React.createRef();
       this.nameRef = React.createRef();
       this.passwordRef = React.createRef();
       this.passwordConfirmRef = React.createRef();
   }
    onSubmit = (event) => {
        event.preventDefault();
        const username = this.usernameRef.current.value;
        const email = this.emailRef.current.value;
        const name = this.nameRef.current.value;
        const password = this.passwordRef.current.value;
        const passwordConfirm = this.passwordConfirmRef.current.value;
        axios.post('/user/new',{
            username,
            email,
            name,
            password
        })
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error) => {
            console.log("erroe:")
            console.log(error);
        })
   }
   getUser = () => {
    axios.get('/user/current',{
    })
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error) => {
        console.log("erroe:")
        console.log(error);
    })
   }
    render(){
        return(
           <div className="login-component">
               <h2 className="text-center">Library</h2>
               <Card>
                   <Card.Body>
                       <button onClick={this.getUser}>Get user</button>
                        <h3 className="text-center">Register</h3>
                        <br/>
                        <Form onSubmit={this.onSubmit}>
                        <Form.Group as={Row} controlId="username">
                            <Form.Label column sm="3">
                            Username
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control ref={this.usernameRef} type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="name">
                            <Form.Label column sm="3">
                            Name
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control ref={this.nameRef} type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column sm="3">
                            Email
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control ref={this.emailRef} type="text" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="password">
                            <Form.Label column sm="3">
                            Password
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control ref={this.passwordRef} type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="passwordConfirm">
                            <Form.Label column sm="3">
                            Password Confirm
                            </Form.Label>
                            <Col sm="9">
                            <Form.Control ref={this.passwordConfirmRef} type="password" placeholder="Password confirm" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                        <Col sm={{ span: 12, offset: 0 }}>
                        <Button className="width-100p" type="submit">Sign Up</Button>
                        </Col></Form.Group>
                        </Form>
                   </Card.Body>
               </Card>
           </div>
        )
    }
}

export default Register;