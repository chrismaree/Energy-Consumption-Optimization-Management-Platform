# Backend API
This directory contains the backend API source code. The API was created in python using Flask. It is wrapped by a swagger generated server. Nginx is used as a reverse proxy, configured in a docker container using docker compose. Flask is executed as a uwsgi by gunicorn and this is monitored by supervisord. 

## How to run
The diagram 

# Development

This configuration used the [Connexion](https://github.com/zalando/connexion) library on top of Flask to facilitate Swagger.

## Requirements
Python 3.5.2+

## Usage
To run the server development server, please execute the following from the root directory:

```
pip3 install -r requirements.txt
python3 -m swagger_server
```

and open your browser to here:

```
http://localhost:8080/v2/ui/
```

The Swagger definition lives here:

```
http://localhost:8080/v2/swagger.json
```

To launch the integration tests, use tox:
```
sudo pip install tox
tox
```

## Development
To run the Jupyter notebook used to populate the database you require to have Jupyter notebook installed on your machine.

To run the notebook execute:
```
cd notebook
juypter notebook
```

You can then open the notebook file from your browser.


## Production

To run the server in production mode run:

```bash
# building the image
docker-compose build

# starting up the container in detached mode
docker-compose run -d

# viewing the status of the docker containers
docker ps -a
```
Every time the source code is updated for the underlying API you must rebuild the container. This will be added to a CI pipeline at a later point.

## API architecture
The basic configuration for the architecture is as follows.
<p align="center">  
  <img
   src="https://raw.githubusercontent.com/SoIidarity/Energy-Consumption-Optimization-Management-Platform/master/Images/System%20architecture-Server%20Perspective%20of%20API%20request.png" alt="Date Picker"/>
  <br>
  <i>Date Picker</i>. High level overview of backend logic
</p>

## Data structure for the entity relational diagram
<p align="center">  
  <img
   src="https://raw.githubusercontent.com/SoIidarity/Energy-Consumption-Optimization-Management-Platform/master/Images/System%20architecture-Entity%20Relational%20Diagram.png" alt="Date Picker"/>
  <br>
  <i>Date Picker</i>. High level overview of backend logic
</p>