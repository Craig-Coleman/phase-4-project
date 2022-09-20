class PublishersController < ApplicationController

    def index 
        render json: {'index'}
    end

    def create 
        render json: {'create'}
    end
    
end
