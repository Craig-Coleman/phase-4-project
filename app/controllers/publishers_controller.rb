class PublishersController < ApplicationController

rescue_from ActiveRecord::RecordInvalid, with :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with :render_not_found_response

    def index 
        publishers = Publisher.all
        render json: publishers
    end

    def create 
        publisher = Publisher.create(publisher_params)
        render json: publisher, status: :created 
    end

    private 

    def publisher_params 
        params.permit(:name, :year_established)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: 'Publisher not found' }, status: :not_found 
    end
    
end
