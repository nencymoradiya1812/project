import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import Allroutes from './routes/Allroutes';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Allroutes/>
    </div>
  );
}

export default App;
