import React, { useState } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import ExperienceForm from './ExperienceForm';
import EducationForm from './EducationForm';
import CVInfo from './CVInfo';
import '../styles/App.css'
import CVPreview from './CVPreview';

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
  const [isDisabled, setIsDisabled] = useState(false);
  const [editing, setEditing] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleShowPreview = () => {
    setShowPreview(true);
  };

  return (
    <div>
      {/* <GeneralInfoForm data={data} setData={setData} setSubmitted={setSubmitted} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
      <ExperienceForm data={data} setData={setData} selectedExperience={editing && editing.experience && editing.experience[0]} setEditing={setEditing}/>
      <EducationForm data={data} setData={setData} selectedEducation={editing && editing.education && editing.education[0]} setEditing={setEditing}/>
      <CVInfo data={data} submitted={submitted} setSubmitted={setSubmitted} setEditing={setEditing} setIsDisabled={setIsDisabled}/> */}
      {showPreview ? (<CVPreview data={data} setShowPreview={setShowPreview}/>)
      : (
        <>
          <GeneralInfoForm data={data} setData={setData} setSubmitted={setSubmitted} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
          <ExperienceForm data={data} setData={setData} selectedExperience={editing && editing.experience && editing.experience[0]} setEditing={setEditing}/>
          <EducationForm data={data} setData={setData} selectedEducation={editing && editing.education && editing.education[0]} setEditing={setEditing}/>
          <CVInfo data={data} submitted={submitted} setSubmitted={setSubmitted} setEditing={setEditing} setIsDisabled={setIsDisabled} handleShowPreview={handleShowPreview}/>
        </>
      )}
    </div>
  );
}

export default App;
