import './App.css';
import './NavBar.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';



function App() {
  return (
    <>
      <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" exact>
            {/* <h1>Home Page</h1> */}
          </Route>
          <Route path="/about">
            {/* <h1>About Page</h1> */}
          </Route>
          <Route path="/services">
            {/* <h1>Services Page</h1> */}
          </Route>
          <Route path="/contact">
            {/* <h1>Contact Page</h1> */}
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
