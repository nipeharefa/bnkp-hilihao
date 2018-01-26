class Congregation < ApplicationRecord
    paginates_per 50

    has_one :baptism
    belongs_to :lingkungan, optional: true
    # accepts_nested_attributes_for :lingkungan

    # enum gender: [:man, :woman]
    enum gender: { man: 'man', woman: 'woman' }

    # validation
    validates :name, presence: true
    validates :place_of_birth, presence: true
    validates :date_of_birth, presence: true

end
