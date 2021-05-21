import { useContext, useState } from 'react'
import { TodoContext } from './TodoContext';




const Todo = ({ todo }) => {

     const { deleteCrud } = useContext(TodoContext);

     return (
          <>
               {
                    todo.map((employee, id) => (
                         <tr key={employee.id}>
                              <th>{employee.Name}</th>
                              <td>{employee.lastName}</td>
                              <td>{employee.email}</td>
                              <td>{employee.address}</td>
                              <td>{employee.phone}</td>
                              <td className="d-flex flex-row justify-content-around">
                                   <i className="fas fa-trash" style={{ color: "red" }} onClick={() => deleteCrud(employee.id)}>5</i>
                              </td>
                         </tr>

                    ))
               }

          </>
     )
}

export default Todo;