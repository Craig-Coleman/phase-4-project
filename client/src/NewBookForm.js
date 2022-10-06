import React, { useState } from 'react';

function NewBookForm({ setBooks, books, publishers }) {

    const [series, setSeries] = useState('');
    const [issue, setIssue] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [coverUrl, setCoverUrl] = useState('');
    const [currentPublisher, setCurrentPublisher] = useState({});
    const [addConfirmation, setAddConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    function handleAddBook(event) {
        event.preventDefault();
        const newBook = {
            series: series,
            issue: issue,
            year_of_publication: pubYear,
            cover_art_url: coverUrl,
            publisher_id: currentPublisher.id
        };
        fetch("/comicbooks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((book) => setBooks([...books, book]));
                setAddConfirmation('New Comicbook Added!');
            } else {
                res.json().then((err) => setErrors(err.errors));          
            };
        });
    };

    const errorList = errors.filter((error) => error !== 'Publisher is not a number').map((error, index) => {
        return(
            <h3 key={index}>{error}</h3>
        );
    });

    return(
        <div>
            <h2>Add a Comic Book!</h2>
            <form id="new_book_form" onSubmit={(event) => handleAddBook(event)}>
                <input 
                    type="text"
                    placeholder="Book Series"
                    onChange={(event) => setSeries(event.target.value)}
                    value={series}
                ></input>
                <input
                    type="text"
                    placeholder="Issue Number"
                    onChange={(event) => setIssue(event.target.value)}
                    value={issue}
                ></input>
                <input
                    type="text"
                    placeholder="Year of Issue Publication"
                    onChange={(event) => setPubYear(event.target.value)}
                    value={pubYear}
                ></input>
                <input
                    type="text"
                    placeholder="URL for Cover Art"
                    onChange={(event) => setCoverUrl(event.target.value)}
                    value={coverUrl}
                ></input>
                <select defaultValue="--Select a Publisher--" onChange={(event) => setCurrentPublisher(publishers.find((pub) => pub.name === event.target.value))}>
                    <option hidden value="--Select a Publisher--">--Select a Publisher--</option>
                    {publishers.map((pub) => {
                    return <option key={pub.id}>{pub.name}</option>
                    })}
                </select>
                <input type="submit" value="Add Book"></input>
            </form>
            <h4 className="confirmation">{addConfirmation}</h4>
            <h4 className="error">{errorList}</h4>
        </div>
    );
};

export default NewBookForm;