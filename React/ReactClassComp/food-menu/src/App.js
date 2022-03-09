import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner Menu</h1>
      <MenuItem dishName = {"Fish Tacos"} price = {"12.50"} likes = {"4"} desc = {"Juicy"}></MenuItem>
      <MenuItem dishName = {"Mac n Cheese"} price = {"9.50"} likes = {"3"} desc = {"Creamy"}></MenuItem>
      <MenuItem dishName = {"NY Strip"} price = {"19.50"} likes = {"234"} desc = {"Steaky"}></MenuItem>
    </div>
  );
}

export default App;
