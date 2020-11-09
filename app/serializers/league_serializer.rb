class LeagueSerializer < ActiveModel::Serializer
    attributes :id, :name, :number_of_teams, :year_founded, :description

end

