import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Login extends Component {
   
    render(){
        return(
           <div className="login">
               <h2 className="text-center">Welcome</h2>
               <Card>
                   <Card.Body>
                        <br/>
                        <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label>
                            Username
                            </Form.Label>
                            <Col>
                            <Form.Control type="text" placeholder="Enter username"/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label>
                            Password
                            </Form.Label>
                            <Col>
                            <Form.Control type="password" placeholder="Enter password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} >
                        <Col>
                            <Button type="submit">Log in
                            </Button>
                        </Col>
                        </Form.Group>
                        </Form>
                   </Card.Body>
               </Card>
           </div>
        )
    }
}

export default Login;