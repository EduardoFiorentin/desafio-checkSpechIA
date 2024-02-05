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
  // pt - portugues
  // en - inglês
  const [lang, setLang] = useState<string>('en')

  return (
    <>
      <Header lang={lang}/>
      <About lang={lang}/>
      <Solutions lang={lang}/>
      <Subscription lang={lang}/>
      <Contacts lang={lang}/>
      <Footer lang={lang}/>
      
      <CookieConsentBar lang={lang}/>
    </>
  )
}

export default App

