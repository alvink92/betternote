class User < ApplicationRecord
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
