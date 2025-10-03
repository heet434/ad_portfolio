import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import MyWork from './pages/MyWork/MyWork';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MyWork />
    </div>
  );
}

export default App;
