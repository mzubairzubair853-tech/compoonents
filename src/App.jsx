import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  function showDummyAlert() {
    alert("I am working");
  }
  return (
    <>
    <Header username={"M Zubair"}isSunny={true}showDummyAlert={showDummyAlert}/>

      <h1>Hello today we will do components</h1>
      <Footer/>
      </>
  );
}

export default App;
    