import logo from './logo.svg';
import './App.css';
import PetForm from './components/PetForm';

function App() {
  return (
    <div className="App container">
      <h1 className="text-primary">Welcome to the Dojo Pet Appointment Service</h1>
      <PetForm></PetForm>
    </div>
  );
}

export default App;
