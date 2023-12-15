import React from 'react';

function CVPreview({ data, handlePreviewToggle }) {
    return (
        <div>
            <h2>CV Preview</h2>
            <div>
                <div>
                    <p>Name: {data.info.name}</p>
                    <p>Email: {data.info.email}</p>
                    <p>Number: {data.info.number}</p>
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
            <div>
                <button onClick={handlePreviewToggle}>Back to Info</button>
            </div>
        </div>
    );
}

export default CVPreview;
