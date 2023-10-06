import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.js'
import HomePage from './components/HomePage.js'

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <HomePage/>
    </div>
  );
}

export default App;
