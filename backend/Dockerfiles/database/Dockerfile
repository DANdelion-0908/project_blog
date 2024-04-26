FROM mysql:latest

COPY ./backend/schema.sql /docker-entrypoint-initdb.d/schema.sql

CMD ["mysqld"]