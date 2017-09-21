# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  note_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  belongs_to :note,
  primary_key: :note_id,
  class_name: :Note

  belongs_to :tag,
  primary_key: :tag_id,
  class_name: :Tag

  validates :note_id, :tag_id, presence: true
  validates_uniqueness_of :note_id, scope: [:tag_id]
end
