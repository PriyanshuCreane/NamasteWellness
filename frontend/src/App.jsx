// import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Week1Beginners from './components/Beginner Exercises/landingPage'
import Gender from './components/Questionnaire/Gender'
import Question1 from './components/Questionnaire/Question1'
import Login from './components/Login'
import SignUp from './components/SignUp'
import BeginnerWeek1 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerWeek1'
import BeginnerDay1 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerDay1'
import BeginnerDay2 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerDay2'
import BeginnerWeek2 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerWeek2'
import BeginnerWeek3 from './components/Beginner Exercises/BeginnerLandingPage/BeginnerWeek3'
import ThreedDesign from './components/ThreedDesign'
// import ButtonQuestionnaire from "./components/Beginner Exercises/buttonQuestionnaire"
// import LandingPage from './components/LandingPage'
// import FitnessLandingPage from "./components/Intermediate Exercises/week1Equipments.jsx"
function App() {

  return (
    <>      
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ThreedDesign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/questionnaire" element={<Gender />} />
          <Route path="/question1" element={<Question1/>} />
          <Route path="/beginnerweek1" element={<BeginnerWeek1/>} />
          <Route path="/beginnerweek2" element={<BeginnerWeek2/>} />
          <Route path="/beginnerweek3" element={<BeginnerWeek3/>} />
          <Route path="/beginnerday1" element={<BeginnerDay1/>} />
          <Route path="/beginnerday2" element={<BeginnerDay2/>} />
          <Route path="/getstarted" element={<Week1Beginners/>} />
      </Routes>
    </BrowserRouter>    
    </>
  )
}

export default App