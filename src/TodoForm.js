import { useContext, useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { TodoContext } from './TodoContext';



const TodoForm = () => {


     const { addTodo } = useContext(TodoContext)

     const [newaddtodo, setNewAddTodo] = useState({
          Name: "", lastname: "", email: "", phone: "", address: ""
     })


     const { Name, lastname, email, phone, address } = newaddtodo;

     const onInputChange = (e) => {
          setNewAddTodo({ ...newaddtodo, [e.target.name]: e.target.value })
     }



     const handleSubmit = (e) => {
          e.preventDefault();
          addTodo(Name, lastname, email, address, phone);
     };

     return (
          <>
               <Form className="bg-danger p-3" onSubmit={handleSubmit}>
                    <Form.Row>
                         <Col lg={6}>
                              <Form.Group controlId="formGroupName">
                                   <Form.Label>Name</Form.Label>

                                   <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        name="Name"
                                        value={Name}
                                        onChange={e => onInputChange(e)}
                                        required
                                   />
                              </Form.Group>
                         </Col>

                         <Col lg={6}>
                              <Form.Group controlId="formGroupLastName">
                                   <Form.Label>Last Name</Form.Label>
                                   <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        name="lastname"
                                        value={lastname}
                                        onChange={e => onInputChange(e)}
                                        required />
                              </Form.Group>
                         </Col>

                         <Col lg={6}>
                              <Form.Group controlId="formGroupEmail">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={email}
                                        onChange={e => onInputChange(e)}
                                        required />
                              </Form.Group>
                         </Col>

                         <Col lg={6}>
                              <Form.Group controlId="formGroupPhone">
                                   <Form.Label>Phone</Form.Label>
                                   <Form.Control
                                        type="text"
                                        placeholder="Enter Phone"
                                        name="phone"
                                        value={phone}
                                        onChange={e => onInputChange(e)}
                                        required />
                              </Form.Group>
                         </Col>

                         <Col lg={12}>
                              <Form.Group controlId="formGroupAddress">
                                   <Form.Label>Address</Form.Label>
                                   <Form.Control
                                        as="textarea"
                                        placeholder="Enter Address"
                                        rows="6"
                                        cols="20"
                                        name="address"
                                        value={address}
                                        onChange={e => onInputChange(e)}
                                        required />
                              </Form.Group>
                         </Col>

                         <Col lg={12} className="mb-3 p-3">
                              <Button variant="primary" type="submit" block >
                                   Add New Todo
  						</Button>
                         </Col>
                    </Form.Row>
               </Form>
          </>
     )
}

export default TodoForm;