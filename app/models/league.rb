class League < ApplicationRecord
    validates :name, presence: true
    validates :number_of_teams, presence: true
    validates :year_founded, presence: true
    validates :description, presence:true


end