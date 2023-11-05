import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lands from './assets/DistantLands.jpg'
import './App.css'
import { gsap } from "gsap";

function App() {
  return (
    <>
        <nav>
          <h1 className="logo">Punreliable.</h1>
        </nav>
        <div className="hero-section">
          <img src={lands} className="hero-img" alt="" />
          <div className="cta">
            <div className="cta-text">
              <h2><span className="cta1">Spreading</span></h2>
              <h2><span className="cta2">Smiles,</span></h2>
              <h2><span className="cta3">a</span></h2>
            </div>
            <div className="cta-text">
              <h2><span className="cta4">Project</span></h2>
              <h2><span className="cta5">at a</span></h2>
              <h2><span className="cta6">time.</span></h2>
            </div>
            <button className="cta-btn">Contact</button>
          </div>
        </div>
    </>
  )
}

export default App
