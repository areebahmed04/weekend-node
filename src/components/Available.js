import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Borrow extends Component {
    render(){
        return(
           <div className="borrow-component">
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
                        <th>Credits</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Brief History of Time</td>
                        <td>Stephen Hawking</td>
                        <td>20</td>
                        <td>
                            <Button variant="primary">Borrow</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Think and Grow Rick</td>
                        <td>Napoleon Hill</td>
                        <td>15</td>
                        <td>
                            <Button variant="primary">Borrow</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Arihant Physics</td>
                        <td>Soumak Haldar</td>
                        <td>25</td>
                        <td>
                            <Button disabled variant="primary">Borrowed</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Two States</td>
                        <td>Chetan Bhagat</td>
                        <td>10</td>
                        <td>
                            <Button variant="primary">Borrow</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Rich Dad Poor Dad</td>
                        <td> Robert Kiyosaki</td>
                        <td>20</td>
                        <td>
                            <Button variant="primary">Borrow</Button>
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

export default Borrow;