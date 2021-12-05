import './App.css';
import Todo from './components/todo';
import Counter from './components/counter';
function App() {
  const todos=[
    {id:1,title:'understand',completed:true},
    {id:2,title:'dinner',completed:false}
  ];
  return (
    <div className="App">
      {todos.map(todo=><Todo key={`key-${todo.id}`} todo={todo} />)}
      <Counter />
    </div>
  );
}

export default App;
