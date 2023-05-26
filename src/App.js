import React from 'react';
import './App.css';

import {  Brand,CTA ,Navbar} from './components' ;
import {Blog , Footer, Possibility, Features, What, Header} from './containers' ;

const App = () => {
  return (
    <div className='App'>
         <div className='gradient__bg'>
            <Navbar/>
            <Header/>
         </div>
         <Brand/>
         <What/>
         <Features/>
         <Possibility/>
         <CTA/>
         <Blog/>
         <Footer/>
    </div>
  )
}

export default App