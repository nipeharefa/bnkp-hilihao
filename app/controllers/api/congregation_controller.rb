module Api
  class CongregationController < ApiController
    def index
      @congregation = Congregation.page(params[:page])
    end

    def show
        @congregation = Congregation.find(params[:id])
    end

    def create
        @congregation = Congregation.new(congregation_params)
        @congregation.uuid = SecureRandom.uuid
        @congregation.save
        render "show"
    end

    private 
    def paginate_params

    end

    def congregation_params
        params[:congregation].permit('name', 'place_of_birth', 'date_of_birth', 'gender')
    end
  end
end
