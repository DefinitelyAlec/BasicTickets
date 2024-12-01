import './App.css';
import { useEffect } from 'react';
import {themeChange} from 'theme-change'



function Theme() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
}

function App() {
  return (
    <>
      <Theme/>
      <button className='btn' data-set-theme='light'>light</button>
      <button className='btn' data-set-theme='dark' >dark</button>
    </>
  );
}

export default App;
