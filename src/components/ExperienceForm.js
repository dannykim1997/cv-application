import React, { useState } from "react";

function ExperienceForm({setCVData}) {
    const [experience, setExperience] = useState({
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const handleExperienceChange = (e) => {
        const {name, value} = e.target;
        setExperience((prevExperience) => ({
            ...prevExperience,
            [name]: value,
        }));
    };

    const handleAddExperience = () => {
        setCVData((prevData) => ({
            ...prevData,
            experience: [...prevData.experience, experience],
        }));

        setExperience({
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
        });
    };

    return (
        <div>
            <h3>Experience</h3>
            <label>Title:</label>
            <input
                type="text"
                name="title"
                value={experience.title}
                onChange={handleExperienceChange}
            />

            <label>Company:</label>
            <input
                type="text"
                name="company"
                value={experience.company}
                onChange={handleExperienceChange}
            />

            <label>Start Date:</label>
            <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={handleExperienceChange}
            />

            <label>End Date:</label>
            <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={handleExperienceChange}
            />

            <label>Description:</label>
            <textarea
                name="description"
                value={experience.description}
                onChange={handleExperienceChange}
            ></textarea>

            <button onClick={handleAddExperience}>Add Experience</button>

        </div>
    );
}

export default ExperienceForm;