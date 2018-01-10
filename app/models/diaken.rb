class Diaken < ApplicationRecord
  belongs_to :congregation
  paginates_per 50
end
