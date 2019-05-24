FROM python:3.7-alpine

ENV FLASK_APP=backend/app
ENV BASE_URL=https://amazon.draper.net.za
ENV API_URL=https://amazon.draper.net.za/api

RUN apk add nodejs-current npm
RUN apk add python python-dev py2-pip autoconf automake g++ make libffi-dev

ADD . ./
RUN cd frontend && npm install
RUN cd backend && pip3 install -r requirements.txt
RUN cd frontend && npm run build
RUN cp -r frontend/dist ../backend/

CMD flask run --host=0.0.0.0
