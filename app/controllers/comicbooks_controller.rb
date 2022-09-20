class ComicbooksController < ApplicationController

    def index 
        render json: {'index'}
    end

    def show 
        render json: {'show'}
    end

    def create 
        render json: {'create'}
    end

    def update
        render json: {'update'}
    end

    def destroy
        render json: {'destroy'}
    end

end
