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
        </div>
    );
}

export default CVPreview;