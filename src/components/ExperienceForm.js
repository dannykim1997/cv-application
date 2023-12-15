import React, { useState, useEffect } from "react";

function ExperienceForm({ data, setData, setEditing, selectedExperience}) {
    const [exp, setExp] = useState({
        id: null,
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
    });

    const [nextId, setNextId] = useState(1);

    useEffect(() => {
    if (selectedExperience) {
        setExp(selectedExperience);
    } else {
        setExp({
            id: nextId,
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
          });
    }}, [selectedExperience, nextId]);

    const handleExperienceChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newExp = {...exp, [name]: value};
        setExp(newExp);
    };

    const handleAddExperience = (e) => {
        e.preventDefault();

        const newExperience = { ...exp, id: nextId };
        const newData = {...data, experience: [...data.experience, newExperience]};
        setData(newData);
        setNextId((prevId) => prevId + 1);
        setExp({
            id: nextId,
            title: '',
            company: '',
            startDate: '',
            endDate: '',
            description: '',
          });
    };

    const handleEditExperience = (e) => {
        e.preventDefault();

        const existingExperienceIndex = data.experience.findIndex(
            (exp) => exp.id === selectedExperience.id
        );

        if (existingExperienceIndex !== -1) {
            const updatedExperienceArray = [...data.experience];
            updatedExperienceArray[existingExperienceIndex] = exp;

            const newData = {...data, experience: updatedExperienceArray};
            setData(newData);
            setExp({
                id: nextId,
                title: '',
                company: '',
                startDate: '',
                endDate: '',
                description: '',
              });
              setEditing(null);
        } else {
            console.error("selected experience not found");
        }
    };

    return (
        <form onSubmit={selectedExperience ? handleEditExperience : handleAddExperience}>
            <h3>Experience</h3>
            <label>Title:</label>
            <input
            type="text"
            name="title"
            value={exp.title}
            onChange={handleExperienceChange}
            />

            <label>Company:</label>
            <input
            type="text"
            name="company"
            value={exp.company}
            onChange={handleExperienceChange}
            />

            <label>Start Date:</label>
            <input
            type="text"
            name="startDate"
            value={exp.startDate}
            onChange={handleExperienceChange}
            />

            <label>End Date:</label>
            <input
            type="text"
            name="endDate"
            value={exp.endDate}
            onChange={handleExperienceChange}
            />

            <label>Description:</label>
            <textarea
            name="description"
            value={exp.description}
            onChange={handleExperienceChange}
            ></textarea>

            <button type="submit">
            {selectedExperience ? "Save Experience" : "Add Experience"}
            </button>
        </form>
    );
}

export default ExperienceForm;
  

// <div>
        //     <h3>Experience</h3>
        //     <label>Title:</label>
        //     <input
        //     type="text"
        //     name="title"
        //     value={exp.title}
        //     onChange={handleExperienceChange}
        //     />

        //     <label>Company:</label>
        //     <input
        //     type="text"
        //     name="company"
        //     value={exp.company}
        //     onChange={handleExperienceChange}
        //     />

        //     <label>Start Date:</label>
        //     <input
        //     type="text"
        //     name="startDate"
        //     value={exp.startDate}
        //     onChange={handleExperienceChange}
        //     />

        //     <label>End Date:</label>
        //     <input
        //     type="text"
        //     name="endDate"
        //     value={exp.endDate}
        //     onChange={handleExperienceChange}
        //     />

        //     <label>Description:</label>
        //     <textarea
        //     name="description"
        //     value={exp.description}
        //     onChange={handleExperienceChange}
        //     ></textarea>

        //     <button onClick={selectedExperience ? handleEditExperience : handleAddExperience}>{selectedExperience ? "Save Experience" : "Add Experience"}
        //     </button>
        // </div>