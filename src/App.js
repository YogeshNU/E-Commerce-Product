import React from 'react';
import './App.css';
import Header from './Components/Header';
import Routing from './Routing/Routing';
import Footer from './Components/Footer';

// import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      
        
        <Header />
        <Routing />
        <Footer />
       {/* <Navbar />  */}
       
    </div>
  )
}

export default App;
