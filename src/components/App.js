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

  return (
    <div>
      <GeneralInfoForm data={data} setData={setData}/>
      <ExperienceForm />
      <EducationForm />
      <CVPreview data={data}/>
    </div>
  );
}

export default App;
