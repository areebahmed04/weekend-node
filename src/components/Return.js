import React, {Component} from 'react';
import SubHeader from './SubHeader';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Return extends Component {
    render(){
        return(
           <div className="return-component">
               <SubHeader name="Return Books"/>
               <div className="container">
                   <br/>
                   <Card>
                       <Card.Body>
                   <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Credits Costed</th>
                        <th>Days Left to Return</th>
                        <th>Credits to Return</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Brief History of Time</td>
                        <td>Stephen Hawking</td>
                        <td>20</td>
                        <td>2</td>
                        <td>10</td>
                        <td>
                            <Button variant="primary">Return</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Think and Grow Rick</td>
                        <td>Napoleon Hill</td>
                        <td>15</td>
                        <td>2</td>
                        <td>10</td>
                        <td>
                            <Button variant="primary">Return</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Arihant Physics</td>
                        <td>Soumak Haldar</td>
                        <td>25</td>
                        <td>2</td>
                        <td>10</td>
                        <td>
                            <Button variant="primary">Return</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Two States</td>
                        <td>Chetan Bhagat</td>
                        <td>10</td>
                        <td>2</td>
                        <td>10</td>
                        <td>
                            <Button variant="primary">Return</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Rich Dad Poor Dad</td>
                        <td> Robert Kiyosaki</td>
                        <td>20</td>
                        <td>2</td>
                        <td>10</td>
                        <td>
                            <Button variant="primary">Return</Button>
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                    </Card.Body>
                   </Card>
               </div>
           </div>
        )
    }
}

export default Return;