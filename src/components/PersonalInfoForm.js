import React from "react";

function PersonalInfoForm({cvData, setCVData}) {
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCVData((prevData) => ({
            ...prevData,
            personalInfo: {
                ...prevData.personalInfo,
                [name]: value,
            },
        }));
    };

    return (
        <div>
          <h3>Personal Information</h3>
            <label>Name:</label>
            <input
            type="text"
            id="name"
            name="name"
            value={cvData.personalInfo.name || ''}
            onChange={handleInputChange}
            />

            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={cvData.personalInfo.email || ''}
            onChange={handleInputChange}
            />

            <label htmlFor="phone">Phone:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={cvData.personalInfo.phone || ''}
                onChange={handleInputChange}
            />

            <label htmlFor="address">Address:</label>
            <input
                type="text"
                id="address"
                name="address"
                value={cvData.personalInfo.address || ''}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default PersonalInfoForm;