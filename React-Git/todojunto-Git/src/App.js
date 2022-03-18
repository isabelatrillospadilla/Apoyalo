import logo from './logo.svg';
import './App.css';
import Todojunto from './components/TodoJunto';



function App() {
  return (
    <div className="App">
  <Todojunto nombre ={"Doe"} apellido = {"Jaen"} edad = {45} color= {"Black"}> </Todojunto>
  <Todojunto nombre = {"Smith"} apellido = {"Jhon"} edad = {88} color= {"Brown"}> </Todojunto>
    </div>
  );
}

export default App;
