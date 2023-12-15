import React from "react";
//import CVPreview from "./CVPreview";

function CVInfo({data, submitted, setSubmitted, setEditing, setIsDisabled, handleShowPreview}) {
    // const [showPreview, setShowPreview] = useState(false);

    const handleEditInfo = () => {
        setSubmitted(false)
        setIsDisabled(false);
    };

    const handleEditExperience = (index) => {
        const selectedExperience = data.experience[index];
        setEditing({experience: [selectedExperience]});
    };

    const handleEditEducation = (index) => {
        const selectedEducation = data.education[index];
        setEditing({education: [selectedEducation]});
    };

    // const handleShowPreview = () => {
    //     setShowPreview(true);
    // };

    // return (
    //     <div>
    //       {showPreview ? (
    //         <CVPreview data={data} togglePreview={setShowPreview}/>
    //       ) : (
    //         <>
    //           <h2>Info</h2>
    //           <div>
    //             <h3>Personal Info</h3>
    //             <p>{submitted ? 'Name: ' + data.info.name : 'Name: '}</p>
    //             <p>{submitted ? 'Email: ' + data.info.email : 'Email: '}</p>
    //             <p>{submitted ? 'Number: ' + data.info.number : 'Number: '}</p>
    //             <button onClick={handleEditInfo}>Edit</button>
    //           </div>
    //           <div>
    //             <h3>Experience</h3>
    //             {data.experience.map((exp, index) => (
    //               <div key={index}>
    //                 <p>Title: {exp.title}</p>
    //                 <p>Company: {exp.company}</p>
    //                 {exp.startDate && <p>Start Date: {exp.startDate}</p>}
    //                 {exp.endDate && <p>End Date: {exp.endDate}</p>}
    //                 {exp.description && <p>Description: {exp.description}</p>}
    //                 <button onClick={() => handleEditExperience(index)}>Edit</button>
    //               </div>
    //             ))}
    //           </div>
    //           <div>
    //             <h3>Education</h3>
    //             {data.education.map((edu, index) => (
    //               <div key={index}>
    //                 <p>Degree: {edu.degree}</p>
    //                 <p>School: {edu.school}</p>
    //                 {edu.startDate && <p>Start Date: {edu.startDate}</p>}
    //                 {edu.endDate && <p>End Date: {edu.endDate}</p>}
    //                 <button onClick={() => handleEditEducation(index)}>Edit</button>
    //               </div>
    //             ))}
    //           </div>
    //           <button onClick={handleShowPreview}>Show Preview</button>
    //         </>
    //       )}
    //     </div>
    //   );

    return (
        <div>
            <h2>Info</h2>
            <div>
                <h3>Personal Info</h3>
                <p>{submitted ? 'Name: ' + data.info.name : 'Name: '}</p>
                <p>{submitted ? 'Email: ' + data.info.email : 'Email: '}</p>
                <p>{submitted ? 'Number: ' + data.info.number : 'Number: '}</p>
                <button onClick={handleEditInfo}>Edit</button>
            </div>
            <div>
                <h3>Experience</h3>
                {data.experience.map((exp, index) => (
                    <div key={index}>
                        <p>Title: {exp.title}</p>
                        <p>Company: {exp.company}</p>
                        {exp.startDate && <p>Start Date: {exp.startDate}</p>}
                        {exp.endDate && <p>End Date: {exp.endDate}</p>}
                        {exp.description && <p>Description: {exp.description}</p>}
                        <button onClick={() => handleEditExperience(index)}>Edit</button>
                    </div>
                ))}
            </div>
            <div>
                <h3>Education</h3>
                {data.education.map((edu, index) => (
                    <div key={index}>
                        <p>Degree: {edu.degree}</p>
                        <p>School: {edu.school}</p>
                        {edu.startDate && <p>Start Date: {edu.startDate}</p>}
                        {edu.endDate && <p>End Date: {edu.endDate}</p>}
                        <button onClick={() => handleEditEducation(index)}>Edit</button>
                    </div>
                ))}
            </div>
            <button onClick={handleShowPreview}>Show Preview</button>
        </div>
    );
}

export default CVInfo;