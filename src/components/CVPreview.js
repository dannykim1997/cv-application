import React from 'react';
import '../styles/App.css';

function CVPreview({ data, handlePreviewToggle }) {
    return (
        <div>
            <h2 className='preview-header'>CV Preview</h2>
            <div className='preview'>
                <div>
                    <div>
                        {data.info.name && <p>{data.info.name}</p>}
                        {data.info.email && <p>{data.info.email}</p>}
                        {data.info.number && <p>{data.info.number}</p>}
                    </div>
                    <div>
                        <h3>Experience</h3>
                        {data.experience.map((exp, index) => (
                        <div key={index}>
                            <p>{exp.title}</p>
                            <p>{exp.company}</p>
                            {exp.startDate && (
                                <p>
                                    {exp.endDate ? `${exp.startDate} - ${exp.endDate}` : `${exp.startDate} - `}
                                </p>
                            )}
                            {exp.description && <p>{exp.description}</p>}
                        </div>
                        ))}
                    </div>
                    <div>
                        <h3>Education</h3>
                        {data.education.map((edu, index) => (
                        <div key={index}>
                            <p>{edu.degree}</p>
                            <p>{edu.school}</p>
                            {edu.startDate && (
                                <p>
                                    {edu.endDate ? `${edu.startDate} - ${edu.endDate}` : `${edu.startDate} - `}
                                </p>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
                <div>
                    <button onClick={handlePreviewToggle} className='preview-button'>Back to Info</button>
                </div>
        </div>
    );
}

export default CVPreview;
