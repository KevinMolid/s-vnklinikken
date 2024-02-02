import { useState } from 'react'
import './App.css'

// Import components
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import InfoBox from './components/InfoBox'
import Section1 from './components/Section1'
import Section2 from './components/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Hero />
      <div class="grid-3-col">
        <InfoBox 
          icon="fa-solid fa-calendar-days" 
          title="Timebestilling" 
          txt="Her kan du bestille time online." 
          btnTxt="Bestill time"
          />
        <InfoBox 
          className="adress-box"
          icon="fa-solid fa-location-dot" 
          title="Vår adresse" 
          txt="Vi holder til i Rådhusgata 20 i Oslo sentrum." 
          btnTxt="Vis på kart"
          />
        <InfoBox 
          icon="fa-solid fa-comments"
          title="Kontakt Oss" 
          txt="Ta gjerne kontakt med oss på telefon eller e-post." 
          tlf="(+47) 22 60 18 00"
          email="post@sovnklinikken.no"
          />
      </div>
      <Section1 />
      <Section2 />

      
    </div>
  )
}

export default App
