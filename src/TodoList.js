import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap'
import Todo from './Todo';
import { TodoContext } from './TodoContext';
import TodoForm from './TodoForm';



const TodoList = () => {


     const { todo } = useContext(TodoContext)

     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);



     /*
          const myRef = useRef(null)//Bura istenilen deyer vermek olar
          const myRefFunction = () => {
               myRef.current.focus()
          }//useRef oldu alanin render olunmasini saglayir,componenet icinde ancaq yazildigi alan render olunur component render olunmur
     */

     return (
          <>
               <div className="d-flex justify-content-between p-3 bg-primary">
                    <h1 className="title">Todo List</h1>
                    <button className="btn btn-dark" onClick={handleShow}><i className="fas fa-plus"></i> Add New Todo</button>
               </div>
               <div className="container-fluid">
                    <table className="table table-sm table-dark table-hover w-100">
                         <thead>
                              <tr>
                                   <th scope="col">Name</th>
                                   <th scope="col">Last Name</th>
                                   <th scope="col">Email</th>
                                   <th scope="col">Address</th>
                                   <th scope="col">Phone</th>
                                   <th scope="col">Actions</th>
                              </tr>
                         </thead>
                         <tbody>
                              <Todo todo={todo} />
                         </tbody>
                    </table>
               </div>
               <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title>Add New Todo</Modal.Title>
                    </Modal.Header>

                    <TodoForm />
               </Modal>





          </>
     );
}

export default TodoList;


/*
<input type="text" placeholder="useRef Funcsiyasi ucun" ref={myRef} />
<button className="btn btn-danger" onClick={myRefFunction}>Click</button>
useRef islemi ucun numune
*/