

## Development Setup

1. Clone the repository and navigate inside it

2. Start all docker containers

        $ docker-compose up
    Wait for about a minute until all is configured correctly.

You can explore the API by visiting http://localhost:8001/v0.1/ui/. It is not functioning though due to the lack of a valid JWT.

To rebuild the image, call

    $ docker-compose build

## Deployment

1. Close the direct access to API by removing the lines 
    ```
    ports:
        - "8001:8000"
    ```
    from the `docker-compose.yaml`

2. Change the environment variables 
    ```
    AUTH0_DOMAIN: "your.domain.auth0.com"
    API_IDENTIFIER: "https://your.domain/yourapi"
    ```
    in the `docker-compose.yaml` to contain your Auth0 parameters.

3. Place your certificates in the folder `$HOME/cert$`.

4. Adjust the file `./nginx/nginx.conf` to contain the names of your certificates. 