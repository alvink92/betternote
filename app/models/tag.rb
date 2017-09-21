# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer          not null
#

class Tag < ApplicationRecord
  has_many :taggings,
  primary_key: :id,
  class_name: :tag_id,
  class_name: :Tagging,
  dependent: :destroy

  has_many :notes,
  through: :taggings,
  source: :note

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  validates :name, :owner, presence: true
  validates_uniqueness_of :name, scope: [:owner]
end
