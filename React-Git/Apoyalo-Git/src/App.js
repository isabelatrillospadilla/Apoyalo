import logo from './logo.svg';
import './App.css';
import Apoyalo from './components/Apoyalo';

function App() {
  return (
    <div className="App">
    <Apoyalo nombre =  {"Doe"} apellido = {"Jaen"} edad = {"45"} color= {"Black"} ></Apoyalo>
    <Apoyalo nombre =  {"Smith"} apellido = {"Jhon"} edad = {"88"} color= {"Brown"} ></Apoyalo>
    <Apoyalo nombre =  {"Fillmore"} apellido = {"Millard"} edad = {"50"} color= {"Brown"} ></Apoyalo>
    <Apoyalo nombre =  {"Smith"} apellido = {"Maria"} edad = {"62"} color= {"Brown"} ></Apoyalo>
    </div>
  );
}

export default App;
