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
  class_name: :Note

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

end
