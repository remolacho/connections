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
