class Api::GabunganController < ApplicationController
    def index
        @gabungan = Gabungan.all
    end
    def create
        @gabungan = Gabungan.new(gabungan_params)

        if @gabungan.save
            return render "show"
        end
        render json: gabungan.errors, status: 400
    end
    private
    def gabungan_params
        params[:gabungan].permit(:name)
    end
end
