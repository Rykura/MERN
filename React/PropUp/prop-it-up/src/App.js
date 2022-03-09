import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <User firstName = {"Jane"} lastName = {"Doe"} age = {"45"} hairColor = {"Black"}></User>
      <User firstName = {"John"} lastName = {"Smith"} age = {"88"} hairColor = {"Brown"}></User>
      <User firstName = {"Millard"} lastName = {"Fillmore"} age = {"50"} hairColor = {"Brown"}></User>
      <User firstName = {"Maria"} lastName = {"Smith"} age = {"62"} hairColor = {"Brown"}></User>
    </div>
  );
}

export default App;
