import React from 'react';
import '../styles/App.css';

function GeneralInfoForm({data, setData, setSubmitted, isDisabled, setIsDisabled}) {
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = {...data, info: {...data.info, [name]: value,}};
        setData(newData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setIsDisabled(true);
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h3>Personal Info</h3>
            <label>Name:
                <input
                    type="text"
                    name="name"
                    value={data.info.name || ''}
                    onChange={handleChange}
                    disabled={isDisabled}
                    placeholder='Full Name'
                    required
                />
            </label>
            <label>Email:
                <input
                    type="email"
                    name="email"
                    value={data.info.email || ''}
                    onChange={handleChange}
                    placeholder='username@email.com'
                    disabled={isDisabled}
                />
            </label>
            <label>Number:
                <input
                    type="text"
                    name="number"
                    value={data.info.number || ''}
                    onChange={handleChange}
                    disabled={isDisabled}
                    placeholder='(xxx)xxx-xxxx'
                />
            </label>
            <button type="submit" disabled={isDisabled}>Submit</button>
        </form>
    );
}

export default GeneralInfoForm;