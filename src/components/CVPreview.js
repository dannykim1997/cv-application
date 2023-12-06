import React from "react";

function CVPreview({cvData}) {
    return (
        <div>
            <h2>CV Preview</h2>
            <div>
                <h3>Personal Information</h3>
                <p>Name: {cvData.personalInfo.name}</p>
                <p>Email: {cvData.personalInfo.email}</p>
                <p>Phone: {cvData.personalInfo.phone}</p>
                <p>Address: {cvData.personalInfo.address}</p>
            </div>

            <div>
                <h3>Experience</h3>
                {cvData.experience.map((exp, index) => (
                <div key={index}>
                    <p>Title: {exp.title}</p>
                    <p>Company: {exp.company}</p>
                    <p>Start Date: {exp.startDate}</p>
                    <p>End Date: {exp.endDate}</p>
                    <p>Description: {exp.description}</p>
                </div>
                ))}
            </div>

            <div>
                <h3>Education</h3>
                {cvData.education.map((edu, index) => (
                <div key={index}>
                    <p>Degree: {edu.degree}</p>
                    <p>School: {edu.school}</p>
                    <p>Start Date: {edu.startDate}</p>
                    <p>End Date: {edu.endDate}</p>
                </div> 
                ))}
            </div>

            <div>
                <h3>Skills</h3>
                {cvData.skills.map((skill, index) => (
                    <div key={index}>
                        <p>Skill: {skill.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CVPreview;