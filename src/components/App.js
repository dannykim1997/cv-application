import React from 'react';
import { useState } from 'react';
import CVForm from './CVForm';
import CVPreview from './CVPreview'
import '../styles/App.css'

function App() {
  const [cvData, setCVData] = useState({
    personalInfo: {},
    education: [],
    experience: [],
    skills: []
  });
  
  return (
    <div>
      <CVForm cvData={cvData} setCVData={setCVData}/>
      <CVPreview cvData={cvData}/>
    </div>
  )
}

export default App;
