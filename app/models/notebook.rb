# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
  has_many :notes,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: :Note,
  dependent: :destroy

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  validates :owner, :title, presence: true
  validates_uniqueness_of :title, scope: [:owner_id]
end
