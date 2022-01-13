class User < ApplicationRecord
    has_secure_password
    
    belongs_to :user_card, dependant: :destroy
    validates :username, uniqueness: { case_sensitive: false }
    validates :email, uniqueness: true
end
