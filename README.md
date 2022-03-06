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
<<<<<<< HEAD

Load database dump
    mysql -u root -p connectus_development < dbconnectus_2021-12-24.sql
    
=======
>>>>>>> 7b585d34f08c3c43aee4768f8040fd7488f9c125
