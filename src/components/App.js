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
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <GeneralInfoForm data={data} setData={setData} setSubmitted={setSubmitted}/>
      <ExperienceForm data={data} setData={setData} selectedExperience={editing && editing.experience && editing.experience[0]}/>
      <EducationForm data={data} setData={setData}/>
      <CVPreview data={data} submitted={submitted} editing={editing} setEditing={setEditing}/>
    </div>
  );
}

export default App;
