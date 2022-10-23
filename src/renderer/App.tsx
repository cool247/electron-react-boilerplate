import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const [count, setCount] = useState(0);

  const handleClick = (plus: string) => {
    if (plus === 'plus') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div style={{ textAlign: 'center' }}>
        <button type="button" onClick={() => handleClick('plus')}>
          Add
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;{count}&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={() => handleClick('minus')}>
          -
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
