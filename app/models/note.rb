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
  validates :author, :notebook, :title, presence: true
  # validates_uniqueness_of :title, scope: [:author_id, :notebook_id]

  include ActionView::Helpers::DateHelper

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

  def last_updated_in_words
    time_ago_in_words(self.updated_at) + " ago"
  end

end
