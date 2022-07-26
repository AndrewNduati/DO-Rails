class Shark < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :facts, presence: true
  has_many :posts
end
