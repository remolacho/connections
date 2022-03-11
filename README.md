# CONNECTUS

To setup the project:

First use `bundle` to install all the gems for the rails project

    bundle install

And use `yarn` to install all package for the frontend

    yarn install
    
Finally run Foreman to start project (front - back at the same time)

    foreman start -f Procfile.dev -p 3000

Or run this in a terminal to start just the backend

    rails s

And run this in another terminal to start just the frontend

    bin/webpack-dev-server


### Setting
* Load database dump
    - mysql -u root -p connectus_development < dbconnectus_2021-12-24.sql


* Environment Variables 
    - application.yml.example copy & paste, change values and change name to application.yml


* Crear DB test
    - rake db:create RAILS_ENV=test
    - rake db:schema:load RAILS_ENV=test


* How to run the test suite
    - rails rswag:specs:swaggerize (runner the test and create documentation)
    - rails g rspec:swagger namespace::controller_name
    - rspec