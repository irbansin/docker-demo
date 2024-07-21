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

