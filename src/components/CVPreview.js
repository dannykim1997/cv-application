import React from "react";

function CVPreview({data, submitted, setEditing, editing}) {
    const handleEditExperience = (index) => {
        const selectedExperience = data.experience[index];
        setEditing({experience: [selectedExperience]});
    }
    if(editing) {
        console.log(editing);
    console.log(editing.experience);
    console.log(editing.experience[0]);
    }
    return (
        <div>
            <h2>Preview</h2>
            <div>
                <h3>Personal Info</h3>
                <p>{submitted ? 'Name: ' + data.info.name : 'Name: '}</p>
                <p>{submitted ? 'Email: ' + data.info.email : 'Email: '}</p>
                <p>{submitted ? 'Number: ' + data.info.number : 'Number: '}</p>
            </div>
            <div>
                <h3>Experience</h3>
                {data.experience.map((exp, index) => (
                    <div key={index}>
                        <p>Title: {exp.title}</p>
                        <p>Company: {exp.company}</p>
                        {exp.startDate && <p>Start Date: {exp.startDate}</p>}
                        {exp.endDate && <p>End Date: {exp.endDate}</p>}
                        {exp.description && <p>Description: {exp.description}</p>}
                        <button onClick={() => handleEditExperience(index)}>Edit</button>
                    </div>
                ))}
            </div>
            <div>
                <h3>Education</h3>
                {data.education.map((edu, index) => (
                    <div key={index}>
                        <p>Degree: {edu.degree}</p>
                        <p>School: {edu.school}</p>
                        {edu.startDate && <p>Start Date: {edu.startDate}</p>}
                        {edu.endDate && <p>End Date: {edu.endDate}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CVPreview