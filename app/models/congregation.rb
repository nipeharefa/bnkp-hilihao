class Congregation < ApplicationRecord
    paginates_per 50

    has_one :baptism
    belongs_to :lingkungan, optional: true

    # enum gender: [:man, :woman]
    enum gender: { man: 'man', woman: 'woman' }
end
