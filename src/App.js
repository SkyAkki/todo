import './App.css';
import Sidebar  from './components/Sidebar';
import ToDoArea from './components/ToDoArea';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <ToDoArea></ToDoArea>
    </div>
  );
}

export default App;
