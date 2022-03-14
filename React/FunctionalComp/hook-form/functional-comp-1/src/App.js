import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <MenuItem dishName={"Mac n Chees"} price={9.99} likes={12} desc={"Creamy and Cheesy"}></MenuItem>
      <MenuItem dishName={"Steak"} price={18.99} likes={32} desc={"Steaky and well seasoned"}></MenuItem>
      <MenuItem dishName={"Sushi"} price={13.99} likes={24} desc={"Fresh as hell"}></MenuItem>
      <MenuItem dishName={"Chicken"} price={14.99} likes={22} desc={"Juicy"}></MenuItem>
    </div>
  );
}

export default App;
