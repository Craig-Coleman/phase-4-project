import React, { useEffect } from 'react';
import BookCard from './BookCard';

function Collection({ books, setBooks }) {

    useEffect(() => {
      fetch("/comicbooks").then((res) => {
        if (res.ok) {
          res.json().then((books) => setBooks(books));
        };
      });
    }, []);

    function deleteBook(id) {
       fetch(`/comicbooks/${id}`, {
           method: "DELETE"
       });
       setBooks(books.filter((book) => book.id !== id))
     };

    const bookList = books.map((book) => {
        return( 
            <div key={book.id}>
                <BookCard book={book} deleteBook={deleteBook}></BookCard>
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