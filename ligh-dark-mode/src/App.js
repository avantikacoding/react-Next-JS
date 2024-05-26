import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { ThemeContextProvider } from './context/themes';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState(true)

  function toggleTheme(){
    //! setTheme((prevTheme)=>setTheme(!prevTheme))
    setTheme((prevTheme)=>!prevTheme)
  }
  console.log(theme,'theme')

  return (
    <ThemeContextProvider value={[toggleTheme, theme]}>
      <div className="App">
        <Card />
      </div>
    </ThemeContextProvider> 
  );
}

export default App;

//* Notes -- Cant print boolean value in jsx {}