import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <MainPage />

      </div>
    </Router>

  );
}

export default App;
