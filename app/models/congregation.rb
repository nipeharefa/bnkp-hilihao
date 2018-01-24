class Congregation < ApplicationRecord
    paginates_per 50

    has_one :baptism
    belongs_to :lingkungan

    # enum gender: [:man, :woman]
    enum gender: { man: 'man', woman: 'woman' }
end
