import React, { useState, useEffect } from 'react';
import '../styles/App.css';

function EducationForm({data, setData, setEditing, selectedEducation}) {
    const [edu, setEdu] = useState({
        id: null,
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
    });

    const [nextId, setNextId] = useState(1);

    useEffect(() => {
        if (selectedEducation) {
            setEdu(selectedEducation);
        } else {
            setEdu({
                id: nextId,
                degree: '',
                school: '',
                startDate: '',
                endDate: '',
              });
        }}, [selectedEducation, nextId]);

    const handleEducationChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newEdu = {...edu, [name]: value};
        setEdu(newEdu);
    };

    const handleAddEducation = (e) => {
        e.preventDefault();
        
        const newData = {...data, education: [...data.education, edu]};
        setData(newData);
        setNextId((prevId) => prevId + 1);
        setEdu({
            id: nextId,
            degree: '',
            school: '',
            startDate: '',
            endDate: '',
        });
    };

    const handleEditEducation = (e) => {
        e.preventDefault();

        const existingEducationIndex = data.education.findIndex(
            (edu) => edu.id === selectedEducation.id
        );

        if (existingEducationIndex !== -1) {
            const updatedEducationArray = [...data.education];
            updatedEducationArray[existingEducationIndex] = edu;

            const newData = {...data, education: updatedEducationArray};
            setData(newData);
            setEdu({
                id: nextId,
                degree: '',
                school: '',
                startDate: '',
                endDate: '',
              });
              setEditing(null);
        } else {
            console.error('selected experience not found');
        }
    };

    const handleCancel = () => {
        setEdu({
            id: nextId,
            degree: '',
            school: '',
            startDate: '',
            endDate: '',
        });
        setEditing(null);
      };

    return (
        <form onSubmit={selectedEducation ? handleEditEducation : handleAddEducation} className='form'>
            <h3>Education</h3>
            <label>Degree:</label>
            <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={handleEducationChange}
                required
            />

            <label>School:</label>
            <input
                type="text"
                name="school"
                value={edu.school}
                onChange={handleEducationChange}
                required
            />

            <label>Start Date:</label>
            <input
                type="text"
                name="startDate"
                value={edu.startDate}
                onChange={handleEducationChange}
            />

            <label>End Date:</label>
            <input
                type="text"
                name="endDate"
                value={edu.endDate}
                onChange={handleEducationChange}
            />

            <div>
                <button type="submit">{selectedEducation ? "Save Education" : "Add Education"}
                </button>
                {selectedEducation && (
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
                )}
            </div>
        </form>
    );
}

export default EducationForm;