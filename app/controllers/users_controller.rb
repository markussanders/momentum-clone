class UsersController < ApplicationController
    
    def show
        user = User.find_by(name: params[:name])
        render json: user
    end

    def create
        user = User.create(name: params[:name], location: params[:location])
        render json: user
    end

    private

    def update
        user = User.find_by(id: params[:id])
        user.update(name: params[:name], location: params[:location])
        render json: user
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.destroy
        render json: {message: 'Deleted successfully'}
    end

end
