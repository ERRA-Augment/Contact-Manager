import './App.css';
import Header from './components/Header'
import AppBody from './components/AppBody'
import AddPersonForm from './components/AddPersonForm'


function App() {
  return (
    <div className="App">
      
      <Header />

      <AddPersonForm />
      
      <AppBody />

      
    </div>
  );
}

export default App;
