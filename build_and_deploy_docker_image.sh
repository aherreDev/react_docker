#!/bin/sh

docker build -t practica_5:latest .

docker stop practica_5_c

docker rm practica_5_c

docker create --name practica_5_c -p 80:80 practica_5:latest

docker start practica_5_c
