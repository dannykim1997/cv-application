import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

function CVForm({cvData, setCVData}) {
    return (
        <div>
            <PersonalInfoForm cvData={cvData} setCVData={setCVData}/>
            <ExperienceForm setCVData={setCVData}/>
            <EducationForm setCVData={setCVData} />
        </div>
    );
}

export default CVForm;