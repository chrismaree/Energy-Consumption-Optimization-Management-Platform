FROM python:3.6

#Configure Machine
RUN  apt-get update -y
RUN apt-get upgrade -y

#Setup
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app


#API
COPY requirements.txt /usr/src/app/
RUN pip3 install --no-cache-dir -r requirements.txt
COPY . /usr/src/app

# Deployment
RUN apt-get install supervisor -y
RUN pip install gunicorn

# Supervisord
RUN mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Start processes
CMD ["/usr/bin/supervisord"]


# EXPOSE 8080

# ENTRYPOINT ["python3"]

# CMD ["-m", "swagger_server"]