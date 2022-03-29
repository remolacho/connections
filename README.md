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


## Setting
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

## Docs

### API

To run the api documentation generator use the following command

    rails rswag

And now you can visit `{defaultHost}/api-docs/index.html`

### Frontend
- [react-router-dom](https://github.com/remix-run/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/installation/getting-started.md) - For the routes in the front
- [react-quill](https://github.com/zenoamaro/react-quill) - A WYSIWYG component for React.
- [react-cookie](https://github.com/reactivestack/cookies/tree/master/packages/react-cookie) - Use cookies with react hooks
- [axios](https://github.com/axios/axios) - For the requests
### Backend
- [rspec](https://github.com/rspec/rspec-rails) - Unit test in rails
- [rack-cors](https://github.com/cyu/rack-cors) - Rack Middleware for handling Cross-Origin Resource Sharing (CORS)
- [database_cleaner](https://github.com/DatabaseCleaner/database_cleaner) - Strategies for cleaning databases in Ruby. Can be used to ensure a clean state for testing.