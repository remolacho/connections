# CONNECTUS

To setup the project:

First use `bundle` to install all the gems for the rails project

    bundle install

And use `yarn` to install all package for the frontend

    yarn install
    
Finally run Foreman to start project

    foreman start -f Procfile.dev -p 3000

Or run this in one terminal to start backend

    rails s

And run this in another terminal to start frontend

    bin/webpack-dev-server