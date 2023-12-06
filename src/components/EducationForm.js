import React, { useState } from "react";

function EducationForm({setCVData}) {
    const [education, setEducation] = useState({
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
    });

    const handleEducationChange = (e) => {
        const {name, value} = e.target;
        setEducation((prevEducation) => ({
            ...prevEducation,
            [name]: value,
        }));
    };

    const handleAddEducation = () => {
        setCVData((prevData) => ({
            ...prevData,
            education: [...prevData.education, education],
        }));

        setEducation({
            degree: '',
            school: '',
            startDate: '',
            endDate: '',
        });
    };

    return (
        <div>
            <h3>Education</h3>
            <label>Degree:</label>
            <input
                type="text"
                name="degree"
                value={education.title}
                onChange={handleEducationChange}
            />

            <label>School:</label>
            <input
                type="text"
                name="school"
                value={education.company}
                onChange={handleEducationChange}
            />

            <label>Start Date:</label>
            <input
                type="date"
                name="startDate"
                value={education.startDate}
                onChange={handleEducationChange}
            />

            <label>End Date:</label>
            <input
                type="date"
                name="endDate"
                value={education.endDate}
                onChange={handleEducationChange}
            />

            <button onClick={handleAddEducation}>Add Education</button>

        </div>
    );
}

export default EducationForm;