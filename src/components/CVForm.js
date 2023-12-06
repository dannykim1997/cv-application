import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

function CVForm({cvData, setCVData}) {
    return (
        <div>
            <PersonalInfoForm cvData={cvData} setCVData={setCVData}/>
            <ExperienceForm setCVData={setCVData}/>
            <EducationForm setCVData={setCVData} />
            <SkillsForm setCVData={setCVData} />
        </div>
    );
}

export default CVForm;