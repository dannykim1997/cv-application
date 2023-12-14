import React from "react";

function GeneralInfoForm({data, setData, setSubmitted}) {
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = {...data, info: {...data.info, [name]: value,}};
        setData(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input
                    type="text"
                    name="name"
                    value={data.info.name || ''}
                    onChange={handleChange}
                />
            </label>
            <label>Email:
                <input
                    type="text"
                    name="email"
                    value={data.info.email || ''}
                    onChange={handleChange}
                />
            </label>
            <label>Number:
                <input
                    type="text"
                    name="number"
                    value={data.info.number || ''}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default GeneralInfoForm;