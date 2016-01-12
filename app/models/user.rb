class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  # has_many :owned_properties, class_name: "Property", foreign_key: :owner_user_id
  has_many :saved_properties, class_name: "SavedProperty", foreign_key: :user_id
  has_many :properties, :through => :saved_properties

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

end
