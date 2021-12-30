class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :suit, :number, :type, :meaning_up, :meaning_rev, :rev_description
end
