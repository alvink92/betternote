# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  title       :string           not null
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :notebook,
  primary_key: :id,
  foreign_key: :notebook_id,
  class_name: :Notebook

  has_many :taggings,
  primary_key: :id,
  foreign_key: :note_id,
  class_name: :Tagging,
  dependent: :destroy

  has_many :tags,
  through: :taggings,
  source: :tag

  validates :author, :notebook, :title, presence: true
  validates_uniqueness_of :title, scope: [:author_id, :notebook_id]
end
