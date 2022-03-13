# frozen_string_literal: true

class BasePolicy
  attr_accessor :user

  def initialize(user:)
    @user = user
  end

  def loudly
    raise ArgumentError unless block_given?
    return true if yield

    raise PolicyException
  end
end
