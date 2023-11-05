import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lands from './assets/DistantLands.jpg'
import { gsap } from "gsap"
import './App.css'
import Navbar from "./components/Navbar";

function App() {

  const tl = gsap.timeline({
    defaults: { duration: 0.75, ease: "Power3.easeOut" },
  })

  tl.fromTo(
    ".hero-img",
    { scale: 1.3, borderRadius: "0rem" },
    {
      scale: 1,
      borderRadius: "2rem",
      delay: 0.35,
      duration: 2.5,
      ease: "elastic.out(1.5,1)",
    }
  )

  tl.fromTo(".cta1", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%")
  tl.fromTo(".cta3", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%")
  tl.fromTo(".cta2", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%")
  tl.fromTo(".cta4", { x: "100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%")
  tl.fromTo(".cta6", { x: "-100%", opacity: 0.5 }, { x: 0, opacity: 1 }, "<20%")
  tl.fromTo(".cta5", { y: "100%", opacity: 0.5 }, { y: 0, opacity: 1 }, "<20%")
  tl.fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<")

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  return (
    <>
      <Navbar />
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
          <button onClick={onEnter} className="cta-btn">Contact</button>
        </div>
      </div>
    </>
  )
}

export default App
