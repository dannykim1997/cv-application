import React, { useState } from "react";

function ExperienceForm({ data, setData }) {
  const [exp, setExp] = useState({
    title: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExp((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleAddExperience = (e) => {
    e.preventDefault();

    setData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, exp],
    }));

    setExp({
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

      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
}

export default ExperienceForm;
