import logo from './logo.svg';
import './App.css';
import { ContextTest } from './ context';
import { useState } from 'react';
import Test1 from './components/test1';


function App() {
  console.log(ContextTest,'ContextTest')
  const [value, setValue] = useState('hi')
  return (
    <ContextTest.Provider  value={[value ,setValue]}>
    <div className="App">
      <header className="App-header">
        <Test1/>
      </header>
    </div>
    </ContextTest.Provider>
  );
}

export default App;
