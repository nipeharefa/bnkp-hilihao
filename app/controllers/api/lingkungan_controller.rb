class Api::LingkunganController < ApplicationController
    def index
        @lingkungan = Lingkungan.all
    end
    def create
        @lingkungan = Lingkungan.new(lingkungan_params)

        if @lingkungan.save
            return render "show"
        end
        render json: lingkungan.errors, status: 400
    end
    private
    def lingkungan_params
        params[:lingkungan].permit(:name)
    end
end
