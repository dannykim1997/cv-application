import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";

function CVForm({cvData, setCVData}) {
    return (
        <div>
            <PersonalInfoForm cvData={cvData} setCVData={setCVData}/>
        </div>
    );
}

export default CVForm;