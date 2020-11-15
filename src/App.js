import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContentArea from './components/ContentArea';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <ContentArea />

      </div>
    </Router>

  );
}

export default App;
