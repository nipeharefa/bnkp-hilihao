class Congregation < ApplicationRecord
    paginates_per 50

    # enum gender: [:man, :woman]
    enum gender: { man: 'man', woman: 'woman' }
end
