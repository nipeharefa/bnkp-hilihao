module Api
  class CongregationController < ApiController
    def index
      @congregation = Congregation.page(params[:page])
    end

    private 
    def paginate_params

    end
  end
end
