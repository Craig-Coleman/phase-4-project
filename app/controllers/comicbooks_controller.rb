class ComicbooksController < ApplicationController

    def index
        books = Comicbook.all  
        render json: books 
    end

    def show 
        book = Comicbook.find(params[:id])
        render json: book 
    end

    def create
        user = User.find(1) 
        new_book = user.comicbooks.create!(new_book_params)
        render json: new_book 
    end

    def update
        render json: { update: 'update'}
    end

    def destroy
        render json: { destroy: 'destroy'}
    end

    private

    def new_book_params 
        params.permit(:id, :series, :issue, :year_of_publication, :user_id, :publisher_id)
    end

end
