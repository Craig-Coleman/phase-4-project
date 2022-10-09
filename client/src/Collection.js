import React, { useEffect } from 'react';
import BookCard from './BookCard';

function Collection({ books, setBooks, publishers, setPublishers }) {

    useEffect(() => {
      fetch("/comicbooks").then((res) => {
        if (res.ok) {
          res.json().then((books) => setBooks(books));
        };
      });
      fetch("/publishers").then((res) => {
        if (res.ok) {
          res.json().then((publishers) => setPublishers(publishers));
        };
      });
    }, [setBooks, setPublishers]);


    function deleteBook(id) {
       fetch(`/comicbooks/${id}`, {
           method: "DELETE"
       });
       setBooks(books.filter((book) => book.id !== id))
     };


    const bookList = books.map((book) => {
        return( 
            <div key={book.id}>
                <BookCard book={book} deleteBook={deleteBook} publishers={publishers} ></BookCard>
                <h2>_________________________________________</h2>
            </div>  
        );
    });
    

    return(
        <div>
            {bookList}
        </div>
    );
};

export default Collection;