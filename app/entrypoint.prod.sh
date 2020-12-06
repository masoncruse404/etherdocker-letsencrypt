#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

python manage.py makemigrations core
python manage.py migrate core
python manage.py makemigrations uploads
python manage.py migrate uploads
python manage.py makemigrations
python manage.py migrate

exec "$@"
