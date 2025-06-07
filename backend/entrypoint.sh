#!/bin/bash
set -e
./manage.py collectstatic --noinput
./manage.py makemigrations
./manage.py migrate
exec gunicorn --bind 0.0.0.0:9000 --workers 4 --threads 2 --worker-class gthread --timeout 120 Gimnasium.wsgi:application
