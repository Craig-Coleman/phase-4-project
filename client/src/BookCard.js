import React from 'react';

function BookCard( { book, deleteBook }) {

    const {id, series, issue, year_of_publication, publisher, cover_art_url} = book;

    function handleDelete() {
        deleteBook(id)
    };

    return(
        <div>
            <h3>Series: {series}</h3>
            <h3>Issue: {issue}</h3>
            <h3>Publication Year: {year_of_publication}</h3>
            <h3>Publisher: {publisher.name}</h3>
            <img className="img" src={cover_art_url} alt="Cover Art" width='250px'></img>
            <button type="button" onClick={handleDelete}>Remove Book from Collection</button>
        </div>
    );
}

export default BookCard;