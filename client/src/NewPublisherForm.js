import React, { useState } from 'react';

function NewPublisherForm({ publishers, setPublishers }) {

    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const newPublisher = {
            name: name,
            year_established: year
        };
        fetch("/publishers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPublisher)
        }).then((res) => {
            if (res.ok) {
                res.json().then((pub) => setPublishers([...publishers, pub]));
                setConfirmation('New Publisher Added!');
            } else {
                res.json().then((err) => setErrors(err.errors));
            };
        });
    };

    return(
        <div>
            <h1>Add a New Publisher</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    onChange={(event) => setName(event.target.value)} 
                    type="text" 
                    placeholder="New Publisher Name" 
                    value={name}>
                </input>
                <input
                    onChange={(event) => setYear(event.target.value)}
                    type="text"
                    placeholder="Year Established"
                    value={year}
                ></input>
                <input type="submit" value="Add New Publisher" ></input>
            </form>
            <h4 className="confirmation">{confirmation}</h4>
            <h4 className="error">{errors}</h4>
        </div>
    );
};

export default NewPublisherForm;