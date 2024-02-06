import { useState } from 'react';
import { About } from './pages/About'
import { Header } from './pages/Header'
import { Solutions } from './pages/Solutions'
import { Subscription } from './pages/Subscriptions'
import 'react-international-phone/style.css';
import { Contacts } from './pages/Contact';
import { Footer } from './pages/Footer';
import CookieConsentBar from './conponents/CookieConsentBar';

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Solutions/>
      <Subscription/>
      <Contacts/>
      <Footer/>
      
      <CookieConsentBar/>
    </>
  )
}

export default App

