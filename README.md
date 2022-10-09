# Phase 4 Project FlatIron SE Flex

## Description

This Project is an application that couples a React frontend with a Rails backend.  It allows users to track their personal comic book collections.  A user can create and use unique login credentials in order to load and edit their own personal collections.  They can add comic books to their collection and include the series, issue number, year of issue publication, a URL for the comic book's cover art, and the publisher of the comic book.  Users can also add publishers in the event that a publisher of their comic books is not included in the form used to add books.  Users can also delete and edit information in their books' details.

## Roadmap

Currently, there is no way for a user to edit or delete their own login credentials, or to change their password in the event that they have forgotten it.  This feature will hopefully be coming soon.

A couple of stretch goals include the following:

-The addition of a graphic of a publisher's logo can be added and displayed anywhere the publisher is mentioned.

-Users can sort through the comic books in their collection based on a number of criteria, including alphabetizing by title, only viewing comic books from a certain publisher, and giving a date range that only comic books within which will be displayed.


## Inspiration

I found that a single join table would cover all the required associations of the project.  The easiest way to use a join table seemed to be to include users that had a collection of items that could be easily split into categories.  As someone who has collected comic books for years, and always organized them in storage boxes and displays based on publisher, creating a collection app that did the same seemed like an easy way to represent something I already did in real life.






