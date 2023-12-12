import React from "react";

function CVPreview(data) {
    return (
        <div>
            <h2>Preview</h2>
            <p>Name: {data.info.name}</p>
            <p>Email: {data.info.email}</p>
            <p>Number: {data.info.number}</p>
        </div>
    );
}

export default CVPreview