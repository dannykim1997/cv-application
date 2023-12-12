import React from "react";

function CVPreview({data, submitted}) {
    console.log(data.info);
    return (
        <div>
            <h2>Preview</h2>
            <div>
                <h3>Personal Info</h3>
                <p>{submitted ? 'Name: ' + data.info.name : 'Name: '}</p>
                <p>{submitted ? 'Email: ' + data.info.email : 'Email: '}</p>
                <p>{submitted ? 'Number: ' + data.info.number : 'Number: '}</p>
            </div>
        </div>
    );
}

export default CVPreview