class UserCard < ApplicationRecord
has_many :cards
belongs_to :user
end
