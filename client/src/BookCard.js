import React, { useState } from 'react';

function BookCard( { book, deleteBook, publishers }) {

    const {id, series, issue, year_of_publication, publisher, cover_art_url} = book;

    const [displayBook, setDisplayBook] = useState(book);
    const [newSeries, setNewSeries] = useState(series);
    const [newIssue, setNewIssue] = useState(issue);
    const [newPubYear, setNewPubYear] = useState(year_of_publication);
    const [newPublisherId, setNewPublisherId] = useState(publisher.id);
    const [newCoverUrl, setNewCoverUrl] = useState(cover_art_url);
    const [hidden, setHidden] = useState(true);
    const [errors, setErrors] = useState([]);

    function handleDelete() {
        deleteBook(id)
    };

    function handleEdit(event) {
        event.preventDefault();
        const newComicInfo = {
            series: newSeries,
            issue: newIssue,
            year_of_publication: newPubYear,
            publisher_id: newPublisherId
        };
        fetch(`/comicbooks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComicInfo)
        })
        .then(res => {
            if(res.ok) {
                res.json().then((newBook) => setDisplayBook(newBook));
                setHidden(true);
                setErrors([]);
            } else {
                res.json().then((err) => setErrors(err.errors));
            };
        });
    };

    const errorList = errors.map((error, index) => {
        return (
            <h4 className="error" key={index}>{error}</h4>
        );
    });

    return(
        <div>
            <h3>Series: {displayBook.series}</h3>
            <h3>Issue: {displayBook.issue}</h3>
            <h3>Publication Year: {displayBook.year_of_publication}</h3>
            <h3>Publisher: {displayBook.publisher.name}</h3>
            <img className="img" src={displayBook.cover_art_url} alt="Cover Art" width='250px'></img>
            <h3> </h3>
            <button type="button" onClick={handleDelete}>Remove Book from Collection</button>
            <h3> </h3>
            <button type ="button" onClick={() => setHidden(false)}>Edit Book Details</button>
            <form id="edit_book_form" hidden={hidden} onSubmit={(event) => handleEdit(event)}>
                <input 
                    type="text"
                    placeholder="Book Series"
                    onChange={(event) => setNewSeries(event.target.value)}
                    value={newSeries}
                ></input>
                <input
                    type="text"
                    placeholder="Issue Number"
                    onChange={(event) => setNewIssue(event.target.value)}
                    value={newIssue}
                ></input>
                <input
                    type="text"
                    placeholder="Year of Issue Publication"
                    onChange={(event) => setNewPubYear(event.target.value)}
                    value={newPubYear}
                ></input>
                <input
                    type="text"
                    placeholder="URL for Cover Art"
                    onChange={(event) => setNewCoverUrl(event.target.value)}
                    value={newCoverUrl}
                ></input>
                <select defaultValue={publisher.name} onChange={(event) => setNewPublisherId(publishers.find((pub) => pub.name === event.target.value).id)}>
                    <option hidden value="--Select a Publisher--">--Select a Publisher--</option>
                    {publishers.map((pub) => {
                    return <option key={pub.id}>{pub.name}</option>
                    })}
                </select>
                <input type="submit" value="Save Changes"></input>
            </form>
            {errorList}
        </div>
    );
};

export default BookCard;