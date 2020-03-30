# Clinic-Service

Project developed for the Feegow challenge

## Technologies used

- Node
- React
- Postgres
- Docker
- Insomonia

## Configuration


0 - Clone the project by running the command:

    git clone https://github.com/keepact/Clinic-service

1 - Now, from the backend folder, you have to rename the ``.env.example`` file to ``.env`` and fill the environment variables:

    CLINIC_API=YOUR-API
    API_SECRET=YOUR-TOKEN

    DB_HOST=host.docker.internal
    DB_PORT=5436
    DB_USER=postgres
    DB_PASS=postgres
    DB_NAME=feegow
    
PS: You can change it in ``docker-compose.xml`` file located in the backend folder

2 - Now that everything is set up, you can run the command:

    docker-compose up

3 - Now, from the ``frontend`` folder run:

    yarn

4 - Again, now in the frontend folder, rename the ``.env.example`` file to ``.env`` and fill the following environment variables:

    REACT_APP_API=http://localhost:3333
    NODE_ENV=development

5 - From that moment, all the project dependencies were downloaded and configuration set up, you can run:

    yarn start
        
6 - Now with server and frontend running, you can access the application at: 

    http://localhost:3000
