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
    => [v] Backend: test app to see all the modules initialized fine

    => Frontend(client): set up http server
        [v] install nginx
        [v] create folder to serve the front-end (chamgo.com)
            => change owner: 'sudo chown -R $USER:$USER chamgo.com'
        [v] build client ('npm run build')
        [v] copy built static files to nginx serving(?) directory (cp -r ~/chamgo/client/build/* ~/var/www/chamgo.com/)
        [v] configure nginx server
            /etc/nginx/sites-available

    => connect backend and frontend

        ? update server blocks, map to client and /graphql to server
        ? build client files and copy them to where nginx is serving from

## Set up AWS CICD
