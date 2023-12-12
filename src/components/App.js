import React, { useState } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import CVPreview from './CVPreview';
import '../styles/App.css'

function App() {
  const [data, setData] = useState(
    {
      info:{
        name: '',
        email: '',
        number: '',
      },
      experience:[],
      education:[],
    }
  );

  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <GeneralInfoForm data={data} setData={setData} setSubmitted={setSubmitted}/>
      <ExperienceForm data={data} setData={setData}/>
      <EducationForm data={data} setData={setData}/>
      <CVPreview data={data} submitted={submitted}/>
    </div>
  );
}

export default App;
