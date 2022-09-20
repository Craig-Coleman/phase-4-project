class ComicbooksController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

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
        new_book = user.comicbooks.create!(book_params)
        render json: new_book 
    end

    def update
        book = Comicbook.find(params[:id])
        book.update!(book_params)
        render json: book 
    end

    def destroy
        book = Comicbook.find(params[:id])
        book.destroy 
        head :no_content 
    end

    private

    def book_params 
        params.permit(:id, :series, :issue, :year_of_publication, :user_id, :publisher_id)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity 
    end

    def render_not_found_response 
        render json: { error: 'Comicbook not found' }, status: :not_found 
    end

end
