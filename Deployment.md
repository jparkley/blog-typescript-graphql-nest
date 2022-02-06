## Prepare code

    # backend
        [v] typeorm migration & package scripts
    # client

## Set up AWS EC2 instance

    New instance: Ubuntu 20.04, t2 micro(free tier)
    => [v] connect to it via SSH
    => [v] install nvm
    => [v] nvm i 16.13.1 (?)
    => [v] install packages
    => [v] exit and login int again
    => [v] install postgres
    => [v] get the db ready
    => [v] run migration: ormconfig.prod.txt
    => test app to see all the modules initialized fine

    => http server
        install nginx
        ? update server blocks, map to client and /graphql to server
        ? build client files and copy them to where nginx is serving from

## Set up AWS CICD
