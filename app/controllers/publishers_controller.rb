class PublishersController < ApplicationController

    def index 
        publishers = Publisher.all
        render json: publishers
    end

    def create 
        render json: { create: 'create'}
    end
    
end
