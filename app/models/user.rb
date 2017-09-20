# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_many :notes,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Note

  has_many :notebooks,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Notebook

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: { case_sensitive: false }
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token, :ensure_downcase_username
  attr_reader :password

  def self.find_by_credentials(username,password)
    user = User.find_by_username(username)
    (user && user.is_password?(password)) ? user : nil
  end

  def ensure_downcase_username
    self.username = self.username.downcase
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
