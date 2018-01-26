class Api::LingkunganController < ApplicationController
    def index
        @lingkungan = Lingkungan.all
    end
end
