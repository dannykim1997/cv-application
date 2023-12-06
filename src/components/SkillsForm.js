import React, { useState } from "react";

function SkillsForm({setCVData}) {
    const [skills, setSkills] = useState({
        title: '',
    });

    const handleSkillsChange = (e) => {
        const {name, value} = e.target;
        setSkills((prevSkill) => ({
            ...prevSkill,
            [name]: value,
        }));
    };

    const handleAddSkills = () => {
        setCVData((prevData) => ({
            ...prevData,
            skills: [...prevData.skills, skills],
        }));

        setSkills({
            title: '',
        });
    };

    return (
        <div>
            <h3>Skills</h3>
            <label>Name:</label>
            <input
                type="text"
                name="title"
                value={skills.title}
                onChange={handleSkillsChange}
            />

            <button onClick={handleAddSkills}>Add Skill</button>

        </div>
    );
}

export default SkillsForm;