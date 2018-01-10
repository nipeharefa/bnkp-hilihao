class Api::DiakenController < ApplicationController
    def index
      @diaken = Diaken.page(params[:page])
    end
end
