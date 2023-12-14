import React, { useEffect, useState } from "react";

function ExperienceForm({ data, setData, selectedExperience}) {
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
        resetForm();
    };

    const handleEditExperience = () => {
        const existingExperienceIndex = data.experience.findIndex(
            (exp) => exp.id === selectedExperience.id
        );

        if (existingExperienceIndex !== -1) {
            const updatedExperienceArray = [...data.experience];
            updatedExperienceArray[existingExperienceIndex] = exp;

            const newData = {...data, experience: updatedExperienceArray};
            setData(newData);
            resetForm();
        } else {
            console.error("selected experience not found");
        }
    };

    const resetForm = () => {
        setExp({
            id: nextId,
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            description: "",
          });
    }

    return (
        <div>
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
            type="date"
            name="startDate"
            value={exp.startDate}
            onChange={handleExperienceChange}
            />

            <label>End Date:</label>
            <input
            type="date"
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

            <button onClick={selectedExperience ? handleEditExperience : handleAddExperience}>{selectedExperience ? "Save Experience" : "Add Experience"}
            </button>
        </div>
    );
}

export default ExperienceForm;


// if (selectedExperience) {
    //     const updatedExperienceArray = data.experience.map((exp) =>
    //       exp.id === selectedExperience.id ? exp : exp
    //     );
    //     const newData = { ...data, experience: updatedExperienceArray };
    //     setData(newData);
    // } else {
    //     const newExperience = { ...exp, id: nextId }; // Use the current nextId
    //     const newData = { ...data, experience: [...data.experience, newExperience] };
    //     setData(newData);
    //     setNextId((prevId) => prevId + 1);
    // }

    // const newData = {...data, experience: [...data.experience, exp]};
    // setData(newData);

    // setExp({
    //   id: nextId,
    //   title: '',
    //   company: '',
    //   startDate: '',
    //   endDate: '',
    //   description: '',
    // });