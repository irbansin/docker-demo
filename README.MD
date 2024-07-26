# Steps to run

## Context

This project is prepared to demonstrate the working of docker. The application development is out of scope and it is assumed that there is an already running application that we are attempting to dockerize.

This codebase contains:
1. `client` folder --? Contains the UI code
2. `server` folder --> Contains the Backend api code

The `docker-compose.yml` file contains info on how to build the docker images.

The `Dockerfile` has the instructions of how to build an isolated project.

## To run the project
Run
```docker compose up -d```
In the root folder and voila, app will be up and running.

# Steps to create similar project:

## Create FE image
1. Created a FE project with Create React App
2. Wrote a Dockerfile to build the application and start the server. (See `docker-demo/client/Dockerfile`)

## Create BE Image
1. Created a BE project with expressJS.
2. Wrote a Dockerfile to build the application and start the server. (See `docker-demo/server/Dockerfile`)

## Create a DB Server
1. Wrote a docker-compose.yml file to fire up a NongoDB server
2. Wrote a Dockerfile to build the application and start the server. (See `docker-demo/docker-compose.yml`)

Please refer to comments in code for reference of what each line does
