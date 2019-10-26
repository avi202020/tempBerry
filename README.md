# Raspberry PI Temperature Monitor

This project contains the full stack for a Raspberry PI Temperature monitor. 

It consists of the following two parts:

* a python script that collects temperatures from "any" source using pilight
* a django rest framework page that the temperature is collected to, along a frontend that the temperatures are displayed at

This project is work in progress, and should definately not be used by anyone. Feel free to use it as a learning resource though.
 

## Setup Docker Stuff

To start development locally, build the docker images and run migrations

```bash
docker-compose build
docker-compose run --rm python python manage.py migrate
```

Consider adding a Django Superuser using
```bash
docker-compose run --rm python python manage.py createsuperuser
```

## Setup Kubernetes Stuff

Deployment Files are in the [deploy/](deploy/) subfolder.

Make sure to add the **.env** file as follows:
```bash
kubectl create configmap tempberry-backend-config --from-file=.env
```