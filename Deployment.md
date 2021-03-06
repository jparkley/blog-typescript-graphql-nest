### Deployment Progress

## Prepare code

    # Backend(folder: backend)
        [v] typeorm migration & package scripts
    # Frontend(folder: client)

## Set up AWS EC2 instance

    => [v] New instance: Ubuntu 20.04, t2 micro(free tier)
        Set up Security Groups
        Verify VPC and Subnet
        Verify Route Table
        Verify Network ACL

    => [v] Connect to it via SSH
    => [v] Install nvm (node version 16.13.1)

    => [v] Set up Postgres database
        [v] npm install packages
        [v] Install postgres
        [v] Get the db ready (db username, password, database...)
        [v] Run migration (config: ormconfig.prod.json)
        [v] Test app to see all the modules initialized fine including TypeORMModule

    => [v] Set up http server
        [v] Install nginx
        [v] Create folder to serve the front-end (chamgo.com)
            [v] Change owner: 'sudo chown -R $USER:$USER chamgo.com'
        [v] Build client ('npm run build')
        [v] Copy built static files to nginx serving directory (cp -r ~/chamgo/client/build/* ~/var/www/chamgo.com/)
        [v] Configure nginx server
            /etc/nginx/sites-available

    => [v] Set up PM2 for Backend
        [v] Install PM2
        [v] Configure reverse proxy(/etc/nginx/sites-available)
        [v] Copy .env.prod to .env before build
        [v] Start PM2 with the dist
        => Backend and Frontend connected!!

## Set up AWS CICD

    long way to go....
