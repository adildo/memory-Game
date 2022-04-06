import './App.css';
import React, {useStatus} from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div id='app'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
