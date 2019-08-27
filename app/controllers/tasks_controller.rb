class TasksController < ApplicationController

    def index
        taks = Task.all
        render json: tasks
    end

    def show
        task = Task.find_by(id: params[:id])
        render json: task
    end

    def create 
        task = Task.create(user_id: params[:user_id], content: params[:content])
        render json: task
    end
    
    private

    def update
        task = Task.find_by(id: params[:id])
        task.update(content[:content], completed: params[:completed])
        render json: task
    end

    def destroy
        task = Task.find_by(id: params[:id])
        task.destroy
        render json: {message: 'Deleted successfully'}
    end

end
