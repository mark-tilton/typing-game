## How to run with docker
1. Create two files, `.mongoenv` and `.mongoexpressenv` in the root directory.
    1. Add the following to `.mongoenv`: 
    ```
    MONGO_INITDB_ROOT_USERNAME: root
    MONGO_INITDB_ROOT_PASSWORD: example
    ```
    1. Add the following to `.mongoexpressenv`:
    ```
    ME_CONFIG_MONGODB_ADMINUSERNAME: root
    ME_CONFIG_MONGODB_ADMINPASSWORD: example
    ```
1. Run `docker-compose up --build` from the root directory. This will pull the mongo and mongo-express images from the docker hub as well as build the react image. Once everything is pulled and built, the server will start.
1. To see the react app, visit `localhost:3000`. To use the mongodb admin interface, visit `localhost:8081`.
1. To see a list of the images that were just built / pulled, run `docker image ls`.
1. To see a list of active containers, run `docker container ls`.
1. To remove the images and containers that docker just installed, run `docker system prune -af`.
