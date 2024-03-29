module Api
  class CongregationController < ApiController
    def index
      @congregation = Congregation.page(params[:page])
    end

    def show
        @congregation = Congregation.find(params[:id])
    end

    def create
      @congregation = Congregation.new(congregation_params.except(:baptism))
      @congregation.uuid = SecureRandom.uuid

      @baptism = Baptism.new
      @baptism.baptism_at = congregation_params[:baptism][:date]
      @congregation.baptism = @baptism
      
    #   logger.info(congregation_params[:baptism])
    #   logger.info(@baptism)

      if @congregation.save
        return render "show"
      end
      render json: @congregation.errors, status: 400
    end

    private 
    def paginate_params

    end

    def congregation_params
        params[:congregation]
            .permit('name', 'place_of_birth', 'date_of_birth', 'gender', :lingkungan_id,
            {:baptism => [:date]})
    end
  end
end