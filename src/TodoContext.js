import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';




export const TodoContext = createContext();


const TodoContextProvider = (props) => {

     const [todo, setTodo] = useState([
          { id: uuidv4(), Name: "Togrul", lastName: "Salmanli", email: "togrul@gmail.com", address: "Seki", phone: "(077)514-80-75" },
          { id: uuidv4(), Name: "Tebriz", lastName: "Aliyev", email: "Tebriz@gmail.com", address: "Seki", phone: "(077)514-80-75" },])


     const addTodo = (Name, lastname, email, address, phone) => {
          setTodo([...todo, { id: uuidv4(), Name: Name, lastName: lastname, email: email, address: address, phone: phone }])
     }



     const deleteTodo = (id) => {
          setTodo(todo.filter(todo => todo.id !== id))
     }


     const updateTodo = (id, updateTodo) => {
          setTodo(todo.map((todo) => (todo.id === id ? updateTodo : todo)))
     }


     return (
          <TodoContext.Provider value={{ todo, addTodo, deleteTodo, updateTodo }}>
               {props.children}
          </TodoContext.Provider>
     )
}
export default TodoContextProvider;