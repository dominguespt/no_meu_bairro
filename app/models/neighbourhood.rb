class Neighbourhood < ApplicationRecord
  has_many :services
  has_many :users
  has_many :news
  has_many :posts, dependent: :destroy
  include PgSearch::Model
  pg_search_scope :search_by_name,
    against: [ :name ],
    using: {
      tsearch: { prefix: true }     
    }
end
