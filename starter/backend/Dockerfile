FROM public.ecr.aws/docker/library/python:3.10-alpine

ENV FLASK_RUN_HOST=0.0.0.0

WORKDIR /app

RUN apk add --no-cache build-base gcc linux-headers libffi-dev openssl

RUN pip install --no-cache-dir pipenv

COPY Pipfile Pipfile.lock /app/

RUN pipenv install --system --deploy

RUN mkdir -p /app/backend

COPY . /app/backend

WORKDIR /app

EXPOSE 5000

CMD ["waitress-serve", "--host=0.0.0.0", "--port=5000", "backend:app"]