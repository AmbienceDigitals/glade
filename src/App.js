import React from 'react';
import Homepage from './page/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Donate from './page/Donate';
import Support from './page/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full">
      <Router>
        <Routes>
          <Route path='/' exact element={<Homepage/>}></Route>
          <Route path='/donate'  element={<Donate/>}></Route>
          <Route path='/support'  element={<Support/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
