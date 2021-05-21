import TodoList from "./TodoList";
import TodoContextProvider from './TodoContext';

const App = () => {
  return (
    <div className="container p-3" style={{ "height": "70vh", "backgroundColor": "red" }}>
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  )
}

export default App