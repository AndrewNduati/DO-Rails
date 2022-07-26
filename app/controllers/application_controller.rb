class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: 'ikush', password: 'shark', except: %i[index show]
end
