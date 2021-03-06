$LOAD_PATH.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'tenon/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'tenon'
  s.version     = Tenon::VERSION
  s.authors     = ['factor[e] design initiative']
  s.email       = ['info@factore.ca']
  s.homepage    = 'http://factore.ca/tenon'
  s.summary     = 'A highly flexible mountable Rails CMS built for rapid application development.'
  s.description = 'A highly flexible mountable Rails CMS built for rapid application development.'

  s.files = Dir['{app,config,db,lib}/**/*', 'vendor/assets/**/*', 'MIT-LICENSE', 'Rakefile', 'README.rdoc']
  s.test_files = Dir['spec/**/*'] - Dir['spec/dummy/**/*']

  s.add_development_dependency 'capybara'
  s.add_development_dependency 'capybara-webkit'
  s.add_development_dependency 'database_cleaner'
  s.add_development_dependency 'factory_girl_rails'
  s.add_development_dependency 'quiet_assets'
  s.add_development_dependency 'launchy'
  s.add_development_dependency 'mocha'
  s.add_development_dependency 'minitest-reporters'
  s.add_development_dependency 'rails-controller-testing'

  # Dummy app gems
  s.add_dependency 'humanizer'
  s.add_dependency 'awesome_nested_set'
  s.add_dependency 'gravatar_image_tag'
  s.add_dependency 'uglifier'

  # The actual gem dependencies
  s.add_dependency 'rails', '>= 5.0.0.rc1', '< 5.1.0'

  s.add_dependency 'active_model_serializers'
  s.add_dependency 'cocoon'
  s.add_dependency 'date_time_attribute'
  s.add_dependency 'haml'
  s.add_dependency 'jquery-fileupload-rails'
  s.add_dependency 'jquery-rails'
  s.add_dependency 'mime-types'
  s.add_dependency 'non-stupid-digest-assets'
  s.add_dependency 'paperclip'
  s.add_dependency 'pg'
  s.add_dependency 'pundit'
  s.add_dependency 'rails-settings-cached'
  s.add_dependency 'react-rails'
  s.add_dependency 'sprockets'
  s.add_dependency 'uuidtools'
  s.add_dependency 'will_paginate'

  # using a Rails 5 compatible versions of the following for now. See Gemfile
  # s.add_dependency 'draper'
end
