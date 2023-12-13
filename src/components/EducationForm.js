import React, { useState } from "react";

function EducationForm({data, setData}) {
    const [edu, setEdu] = useState({
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
    });

    const handleEducationChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newEdu = {...edu, [name]: value};
        setEdu(newEdu);
        // setEdu((prevEdu) => ({
        //     ...prevEdu,
        //     [name]: value
        // }));
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        
        const newData = {...data, education: [...data.education, edu]};
        setData(newData);
        // setData((prevData) => ({
        //     ...prevData,
        //     education: [...prevData.education, edu],
        // }));

        setEdu({
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
                value={edu.degree}
                onChange={handleEducationChange}
            />

            <label>School:</label>
            <input
                type="text"
                name="school"
                value={edu.school}
                onChange={handleEducationChange}
            />

            <label>Start Date:</label>
            <input
                type="date"
                name="startDate"
                value={edu.startDate}
                onChange={handleEducationChange}
            />

            <label>End Date:</label>
            <input
                type="date"
                name="endDate"
                value={edu.endDate}
                onChange={handleEducationChange}
            />
            <button onClick={handleAddEducation}>Add Education</button>
        </div>
    );
}

export default EducationForm;